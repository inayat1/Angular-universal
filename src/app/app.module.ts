import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }  from '@angular/http';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { routing }  from './app.routes';
import { Fruits }  from './fruits/fruits.component';
import { Landing }  from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    Fruits,
    Landing
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'universalAng'}),
    HttpModule,
    routing
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
