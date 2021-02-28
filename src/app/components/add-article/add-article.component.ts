import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../viewmodels/IDepartment';
import {department} from '../Services/department.service';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
sections:string[]=['Keep up with the new','Explore top attractions']
departments:IDepartment[]=[]

  constructor(public depService: department) { }

  ngOnInit(): void {
    let sup= this.depService.getAll().subscribe(
      (response) => {
        this.departments = response;
        console.log(this.departments);
      },
      (err) => { console.log(err) }
    );
  }

}
