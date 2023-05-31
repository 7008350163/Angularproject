import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { emp } from './emp';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {

  constructor(private Api1:ApiService){
     console.log(emp)

  }

  emp1:emp[]|undefined

  emp= new emp();

  
  Employeedetails(){
    console.log("buttonworking")
    this.Api1.getemp().subscribe(data=>{
      console.log(data)
      this.emp1 = data
    })
    
  }
  //post comp api
  addemp(){
    this.Api1.addemp(this.emp).subscribe(data=>{
      console.log(data)
    })
  }
}  
