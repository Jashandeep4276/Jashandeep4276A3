import { Component, OnInit } from '@angular/core';
import { Jashandeep4276 } from '../jashandeep4276';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginNameObj = new Jashandeep4276(23,'Jashandeep Kaur', 'Jashandeep4276', 'Campus', 'Assignment 3');

}
