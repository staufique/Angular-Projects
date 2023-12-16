import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CollegesDataService {
  url = 'http://127.0.0.1:5000/api/md/college-details';
  constructor(private http:HttpClient) { }

  users()
  {
    return this.http.get(this.url);
  }
}
