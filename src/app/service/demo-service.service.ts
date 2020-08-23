import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    return this.http.get("http://localhost:4200/assets/data");
  }
}
