import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MobileapiService } from './mobileapi.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {

  mobile1:any;
constructor(private route:Router  , private mobileapi:MobileapiService){
  this.mobile1=mobileapi.mobileapi;
}
next1(id:any){
  console.log(id)
  this.route.navigateByUrl("mobile/"+id+"/display")
}

}
