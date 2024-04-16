import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-component-binding',
  templateUrl: './two-way-component-binding.component.html',
  styleUrls: ['./two-way-component-binding.component.css']
})
export class TwoWayComponentBindingComponent implements OnInit {

  constructor() { }
  userName:string="Pawan Singh"


  ngOnInit(): void {
  }

}
