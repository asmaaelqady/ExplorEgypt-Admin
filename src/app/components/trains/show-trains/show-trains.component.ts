import { Component, OnInit } from '@angular/core';
import { TrainService } from '../../Services/train.service';
import { Itrain } from '../../viewmodels/itrain';

@Component({
  selector: 'app-show-trains',
  templateUrl: './show-trains.component.html',
  styleUrls: ['./show-trains.component.scss']
})
export class ShowTrainsComponent implements OnInit {

  TrainList: Itrain[]=[];
  deleted:boolean=false
  constructor(private trainSer: TrainService, ) { }

  ngOnInit(): void {
    console.log('train')
    this.trainSer.geHotels().subscribe(
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
              // this.route.navigate(['/hotels/all']);
              this.deleted= true
              
            },
            (err) => { console.log(err) }
          
      )
    }
  }

}
