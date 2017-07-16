import { Component, Input } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'list',
  template: `<ul>
  <li *ngFor="let fruit of fruits">{{fruit.name}}</li>
</ul>
<input type="text" placeholder="enter name" />
<a routerLink="/frucomp" routerLinkActive="active">landing</a>`
})
export class List {
  public fruits:any;
  constructor(public http: HttpService) {
    http.getdata('http://localhost:4000/fruits').subscribe(data => {
        this.fruits = data;
     });
  }
  title = 'list';
}
