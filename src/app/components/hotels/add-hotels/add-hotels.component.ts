import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelService } from '../../Services/hotel.service';
import { ICity } from '../../viewmodels/icity';
import { IHotel } from '../../viewmodels/ihotel';

@Component({
  selector: 'app-add-hotels',
  templateUrl: './add-hotels.component.html',
  styleUrls: ['./add-hotels.component.scss']
})
export class AddHotelsComponent implements OnInit {

  AddHotelForm: FormGroup;
   hotel: IHotel;
  CityList: ICity[]=[];
  added:boolean=false
  constructor( private fb: FormBuilder, private hotelSer: HotelService) {
    this.AddHotelForm = this.fb.group({
    hotelName: [''],
    city:[''],
    roomPrice:[''],
    contactInfo: [''],
    adress:[''],
    })
    this.hotel={
    hotelName: '',
    city:'',
    roomPrice:'',
    contactInfo: '',
    adress:'',
    }

   }

  ngOnInit(): void {
    this.hotelSer.getCity().subscribe(
      (response) =>{
        // console.log(this.CatagoryListApi)
      this.CityList= response;
       console.log(this.CityList)
    },
      (err) =>{console.log(err)} 
    
    )
  }

  AddHotel(){
    console.log(this.AddHotelForm.value)
    this.hotelSer.addHotel(this.AddHotelForm.value).subscribe(
      (res) => {
        console.log(res);
        this.AddHotelForm.reset();
        this.added= true
      },
      (err) => { console.log(err) }
    );
  }

}
