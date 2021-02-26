import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICity } from '../viewmodels/icity';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IHotel } from '../viewmodels/ihotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private httpclient: HttpClient) { }
  getCity(): Observable<ICity[]> {
    return this.httpclient.get<ICity[]>(`${environment.API_URL}/city`);
  }
  addHotel(hotel: IHotel): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };

    return this.httpclient.post<any>(`${environment.API_URL}/hotels`, hotel, httpOptions);
  }
  geHotels(): Observable<IHotel[]> {
    return this.httpclient.get<IHotel[]>(`${environment.API_URL}/hotels`);
  }
  // update(id:number, hotel:IHotel) {
  //   const updated = {hotelName:hotel.hotelName,
  //   city: hotel.city,
  //   roomPrice:hotel.roomPrice,
  //   contactInfo: hotel.contactInfo,
  //   adress:hotel.adress}
  //   return this.httpclient.put(`${environment.API_URL}/hotels/${id}`, updated);
  // }

  deletehotel(id:any) : Observable<any[]> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //,'Accept':' */*'
      //,'Authorization': 'my-auth-token'
        })};
      
    return this.httpclient.delete<any>(`${environment.API_URL}/hotels/${id}`, httpOptions);
  }
}



