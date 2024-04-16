import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }
number:any=0;
// clickme(){

//     this.number=this.number+1;
    


//   }
clickme(resoponse){

console.log(resoponse.value);


  }
  myValue:any;
  getValue(myValue){
    // console.log(myValue.target.value)
    console.log(myValue)
  
  
  }
  ngOnInit(): void {
  }

}
