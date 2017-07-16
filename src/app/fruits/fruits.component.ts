import { Component } from '@angular/core';

@Component({
  selector: 'fru',
  template: `<div>hello fruits</div>
  <a routerLink="/landing" routerLinkActive="active">landing</a>`
})
export class Fru {
  public fruits:any;
  title = 'fru';
}
