import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }
  private DB_URL = ""; //JSON File [Server] ==> [JsonServer]
  getAllRooms() {
    return this.http.get(this.DB_URL+ "/rooms");
  }
}
