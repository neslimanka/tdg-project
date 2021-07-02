import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Sensor } from '../model/sensor';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  path=" http://localhost:3000/sensor";
constructor(

  private http:HttpClient,
) { }

getIvme():Observable<Sensor[]>{
  return this.http.get<Sensor[]>(this.path);
  

   
    
 }

}
