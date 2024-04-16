import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {


  myCompany: String | undefined;
  @Input() company = -"Pawan Singh"
  myInterval: string | undefined;
  // myInterval:any;
  constructor() {
    console.log("constructure called")
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log("ngOnchanges Call");
    this.myCompany = changes['company'].currentValue;
    console.log(changes['company'].currentValue);
  }

  ngOnInit(): void {
    //  this.myInterval= setInterval(()=>{
    //     console.log("Pawan")
    //   })
    console.log("ngOnit called");
  }

  ngDoCheck() {
    console.log("ngDoCheck Called");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit Called");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked Called");

  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit Called");

  }
  ngAfterViewChecked() {
    console.log("ngAfterViewInitCheked Called");

  }
  ngOnDestroy() {
    clearInterval(this.myInterval)
    console.log("ngOnDestroyed Called")
  }

@Input() empDetails:any;

}
