import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }  from '@angular/http';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { Test } from './test/test.component';
import { routing }  from './app.routes';
import { BrowserPrebootModule } from 'preboot/browser';
import { Fru }  from './fruits/fruits.component';
import { List }  from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    Fru,
    List,
    Test
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'universalAng'}),
    BrowserPrebootModule.replayEvents(),
    HttpModule,
    routing
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
