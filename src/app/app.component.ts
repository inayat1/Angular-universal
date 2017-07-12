import { Component } from '@angular/core';
//import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public fruits:any;
  
  //constructor(public http: HttpService) {
   // http.getdata('http://localhost:4000/fruits').subscribe(data => {
    //    this.fruits = data;
    // });
 // }
  title = 'app';
}
