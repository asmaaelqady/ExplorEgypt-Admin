import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainService } from '../../../../Services/train.service';
import { ICity } from '../../../../viewmodels/icity';
import { Itrain } from '../../../../viewmodels/itrain';

@Component({
  selector: 'app-edit-trains',
  templateUrl: './edit-trains.component.html',
  styleUrls: ['./edit-trains.component.scss']
})
export class EditTrainsComponent implements OnInit {

  AddTrainForm!: FormGroup;
  id!: number;
  // isAddMode!: boolean;
  train: Itrain;
  CityList: ICity[]=[];
  CityID: ICity[] = [];
  added:boolean=false;
  constructor(private fb: FormBuilder, private trainSer: TrainService,private router: Router,private route: ActivatedRoute,) { 
    this.AddTrainForm = this.fb.group({
      trainNumber: [''],
      city:[''],
      cityID:[''],
      ticketPrice:[''],
      destination: [''],
      destinationId: [''],
      departureTime:[''],
      arrivalTime:[''],
      details:[''],
      })
      this.train={
        city:this.AddTrainForm.value.city,
        ticketPrice:this.AddTrainForm.value.ticketPrice,
        destination: this.AddTrainForm.value.destination,
        departureTime:this.AddTrainForm.value.departureTime,
        arrivalTime:this.AddTrainForm.value.arrivalTime,
        details:this.AddTrainForm.value.details,
      }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.trainSer.getCity().subscribe(
      (response) =>{
      this.CityList= response;
       console.log(this.CityList)
    },
      (err) =>{console.log(err)} 
    
    )
    this.trainSer.getTrainsByID(this.id).subscribe(
      (response)=>{
        this.AddTrainForm.patchValue(response)
        // console.log(response)
      }
    )
  }
  editTrain(){
    console.log(this.AddTrainForm.value)
    this.trainSer.update(this.id,this.AddTrainForm.value).subscribe(
      (res) => {
        console.log(res);
        this.added= true
        this.router.navigate(['/trains/all']);
      },
      (err) => { console.log(err) }
    );
  }

}
