import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileapiService {
 

  constructor() { }
  mobileapi=[
    {
      id:"1",
      img:"../../../assets/laptop1.jpg",
      title:"Ios Laptop",
      desc :"Ios 256 gb 1,25,000/-"
    },
    {
      id:"2",
      img:"../../../assets/laptop2.jpg",
      title:"iphone14",
      desc:"Ios X 256 gb 1,50,000/-",
      model:"t21"
    }
   ]
}
