import { Component, OnInit } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
exact: { exact: boolean; } | IsActiveMatchOptions | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
