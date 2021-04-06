import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  addUsers(object: Object){
    return this.http.post('http://localhost:3000/signup' , object)

}
}
