import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrainService } from '../../Services/train.service';
import { ICity } from '../../viewmodels/icity';
import { Itrain } from '../../viewmodels/itrain';

@Component({
  selector: 'app-add-trains',
  templateUrl: './add-trains.component.html',
  styleUrls: ['./add-trains.component.scss']
})
export class AddTrainsComponent implements OnInit {

  AddTrainForm: FormGroup;
   train: Itrain;
  CityList: ICity[]=[];
  added:boolean=false
  constructor(private fb: FormBuilder, private trainSer: TrainService) {
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
        city:'',
        ticketPrice:'',
        destination: '',
        departureTime:'',
        arrivalTime:'',
        details:'',
      }
   }

  ngOnInit(): void {
    this.trainSer.getCity().subscribe(
      (response) =>{
        // console.log(this.CatagoryListApi)
      this.CityList= response;
       console.log(this.CityList)
    },
      (err) =>{console.log(err)} 
    
    )
  }
  AddTrain(){
    console.log(this.AddTrainForm.value)
    this.trainSer.addtrain(this.AddTrainForm.value).subscribe(
      (res) => {
        console.log(res);
        this.AddTrainForm.reset();
        this.added= true
      },
      (err) => { console.log(err) }
    );
  }

}
