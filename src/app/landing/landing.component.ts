import { Component, Input } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'landing',
  template: `<ul>
  <li *ngFor="let fruit of fruits">{{fruit.name}}</li>
</ul>
<a routerLink='/fruitsComp' routerLinkActive='active'>Fruit Salad</a>
<input type="text" placeholder="enter name" />`
})
export class Landing {
  public fruits:any;
  constructor(public http: HttpService) {
    http.getdata('http://localhost:4000/fruits').subscribe(data => {
        this.fruits = data;
     });
  }
  title = 'landing';
}
