import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MobileapiService } from './mobileapi.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent {
  laptop1:any;
  constructor(private route:Router  , private mobileapi:MobileapiService){
    this.laptop1=mobileapi.mobileapi;
  }
  next1(id:any){
    console.log(id)
    this.route.navigateByUrl("laptop/"+id+"/display1")
  }
  
}
