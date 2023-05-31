import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileapiService } from '../mobileapi.service';

@Component({
  selector: 'app-display',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component {
  id:any;
  findbyid:any;
  
  constructor(private activeroute:ActivatedRoute,private mobile:MobileapiService){}
  ngOnInit(){
    this.id=this.activeroute.snapshot.paramMap.get("id");
    this.findbyid=this.mobile.mobileapi.find(x=>x.id==this.id);
    console.log(this.findbyid);
  }
}

