import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/service/users.service';
import { IUser } from 'src/app/viewmodels/iuser';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {
  subscribtion: Subscription|null=null;
  UserList:IUser[]=[];
  constructor(private userservice :UsersService) {
    console.log("on constractor");
   this.getAllUsers();
   }
 

  ngOnInit(): void {
    console.log("on init");
  }
  getAllUsers(){
    this.subscribtion = this.userservice.getAllUsers().subscribe(
      (response)=>{
        this.UserList=response;
        console.log(this.UserList)
      },
      (err)=>{console.log(err)}
    ); 
  }
  deleteUser(id:number){
    console.log(id);
      this.userservice.deleteUser(id)
      .subscribe(data => {
       console.log(data);
       this.getAllUsers();
     });
     
      
   }
   
}
