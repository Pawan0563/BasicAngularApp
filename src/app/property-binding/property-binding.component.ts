import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

// myValue:string=" Welcome Pawan Singh";
// enebled:boolean=false;
// yourValue:string="information"

style1 ="12px"

manyClass={
  class1:true,
  class2:false,
  class3:true

}

manyStyles={
  'background-color':"yellow",
  'font-size':"23px",
  'border':'5x solid pink'
}
  ngOnInit(): void {
  }

}
