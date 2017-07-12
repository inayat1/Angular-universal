import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';
import { AppModule } from './app.module';
import { HttpModule }  from '@angular/http';
import { ServerPrebootModule } from 'preboot/server';
import { AppComponent } from './app.component';
//import { HttpService } from './http.service';

@NgModule({
  imports: [
    ServerModule,
    AppModule,
    ServerPrebootModule.recordEvents({ appRoot: 'app-root' }),
    HttpModule
  ],
  //providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
