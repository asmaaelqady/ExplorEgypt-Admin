import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../../Services/hotel.service';
import { ICity } from '../../viewmodels/icity';
import { IHotel } from '../../viewmodels/ihotel';

@Component({
  selector: 'app-edit-hotels',
  templateUrl: './edit-hotels.component.html',
  styleUrls: ['./edit-hotels.component.scss']
})
export class EditHotelsComponent implements OnInit {

  AddHotelForm!: FormGroup;
  id!: number;
  // isAddMode!: boolean;
  hotel: IHotel;
  CityList: ICity[]=[];
  CityID: ICity[] = [];
  added:boolean=false;
  // data:IHotel
  constructor(private fb: FormBuilder, private hotelSer: HotelService,private router: Router,private route: ActivatedRoute,) {
    this.AddHotelForm = this.fb.group({
      id:[''],
      hotelName: [''],
      city:[''],
      roomPrice:[''],
      contactInfo: [''],
      adress:[''],
      cityID:[''],
      })
      this.hotel={

        hotelName: this.AddHotelForm.value.hotelName,
        city:this.AddHotelForm.value.city,
        roomPrice:this.AddHotelForm.value.roomPrice,
        contactInfo: this.AddHotelForm.value.contactInfo,
        adress:this.AddHotelForm.value.adress,
        
        }
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
        
    this.hotelSer.getCity().subscribe(
      (response) =>{
      this.CityList= response;
       console.log("cityList",this.CityList)
    },
      (err) =>{console.log(err)} 
    
    )
    this.hotelSer.getHotelByID(this.id).subscribe(
      (response)=>{
        this.AddHotelForm.patchValue(response)
        // console.log(response)
      }
    )
    
     
  }
  chooseCity(a: any) {
    // console.log(a.target.value);
    this.hotelSer.getCityID(a.target.value).subscribe(
      (response) => {
        console.log(this.CityID)
        this.CityID = response;
      },
      (err) => { console.log(err) }
    )}
    editHotel(){
      console.log(this.AddHotelForm.value)
      this.hotelSer.update(this.id,this.AddHotelForm.value).subscribe(
        (res) => {
          console.log(res);
          this.added= true
          this.router.navigate(['/hotels/all']);
        },
        (err) => { console.log(err) }
      );
    }

}
