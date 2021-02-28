import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../viewmodels/IactArticle';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ActArticlesService {

  constructor(private http: HttpClient) { }
  getAll(): Observable <Article[]>
    {
      return this.http.get<Article[]>(`${environment.API_URL}/ActivitiesArticles`);
    }
    addArticle(Article: Article): Observable<any[]> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
          //,'Accept':' */*'
          //,'Authorization': 'my-auth-token'
        })
      };

      return this.http.post<any>(`${environment.API_URL}/ActivitiesArticles`, Article, httpOptions);
    }
  }

