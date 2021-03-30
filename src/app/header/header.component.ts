import { Component, OnInit } from '@angular/core';
import { Jashandeep4276 } from '../jashandeep4276';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
loginNameObj = new Jashandeep4276(23,'Jashandeep Kaur', 'Jashandeep4276', 'Campus', 'Assignment 3');

}
