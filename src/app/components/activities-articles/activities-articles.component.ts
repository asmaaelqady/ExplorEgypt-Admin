import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActArticlesService } from '../Services/act-articles.service';
import { Article } from '../viewmodels/IactArticle';

@Component({
  selector: 'app-activities-articles',
  templateUrl: './activities-articles.component.html',
  styleUrls: ['./activities-articles.component.scss']
})
export class ActivitiesArticlesComponent implements OnInit {
  ArticleList:Article[]=[]

  constructor(private router: Router,public ArticleService: ActArticlesService) { }

  ngOnInit(): void {

    let sup3= this.ArticleService.getAll().subscribe(
      (response) => {
        this.ArticleList = response;
        console.log(this.ArticleList[0]);
      },
      (err) => { console.log(err) }
    );
  }

  }


