import { Component } from '@angular/core';
import { getCars} from '../app/myCars';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jashandeep4276A3';
  carList= getCars();
  
  carInfo(i: number)
  {
    $('#carMake').val(this.carList[i].carMake);
    $('#carModel').val(this.carList[i].carModel);
    $('#carBodyType').val(this.carList[i].carBodyType);
    $('#carColor').val(this.carList[i].carColor);
    // $('#carPicture').val(this.carList[i].carPicture);
    $('#carImage').attr("src", this.carList[i].carPicture) ;
  }
}
