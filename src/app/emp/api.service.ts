import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { emp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  postemp(){
    throw new Error('method not implemented .');
  }
   apiurl="http://localhost:3000/"

  constructor(private http:HttpClient) { 
    console.log(`${this.apiurl}`)
  }
  getemp():Observable<emp[]>{
    console.log("get emp method"+this.apiurl+"emp")
    console.log(this.apiurl.toString())
    return this.http.get<emp[]>(this.apiurl+"emp")
  }
  //post method
  addemp(emp:emp):Observable<any>{
    const headers ={'content-type':'application/json'}
    const body =JSON.stringify(emp)
    
    console.log(body)
    return this.http.post(this.apiurl+'emp',body,{'headers':headers})

  }
}
