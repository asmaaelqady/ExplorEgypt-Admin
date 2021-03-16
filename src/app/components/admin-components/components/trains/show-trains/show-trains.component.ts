import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainService } from 'src/app/services/train.service';
import { Itrain } from '../../../../../viewmodels/itrain';

@Component({
  selector: 'app-show-trains',
  templateUrl: './show-trains.component.html',
  styleUrls: ['./show-trains.component.scss']
})
export class ShowTrainsComponent implements OnInit {

  TrainList: Itrain[]=[];
  deleted:boolean=false
  constructor(private trainSer: TrainService,private router: Router ) { }

  ngOnInit(): void {
    console.log('train')
    this.trainSer.getTrains().subscribe(
       (response) => {
         console.log(response)
         this.TrainList = response;
       },
       (err) => { console.log(err) }
     );
  }

  deletetrain(id:any) {
    console.log("delet")
    if(confirm("Are you want to delete")){
      this.trainSer.deleteTrain(id).subscribe(
        (res) => {
              console.log(res);
               this.router.navigate(['/trains/all']);
              this.deleted= true

            },
            (err) => { console.log(err) }

      )
    }
  }

}
