import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pawan-raja',
  templateUrl: './pawan-raja.component.html',
  styleUrls: ['./pawan-raja.component.css']
})
export class PawanRajaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goto(){
    alert("go to somewhere")
    this.router.navigate(["./"])

  }

}
