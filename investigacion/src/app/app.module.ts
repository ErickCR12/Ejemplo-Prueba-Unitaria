import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumarestaComponent } from './sumaresta/sumaresta.component';
import { MultdivComponent } from './multdiv/multdiv.component';

@NgModule({
  declarations: [
    AppComponent,
    SumarestaComponent,
    MultdivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'sumaresta', component: SumarestaComponent},
      {path: 'multidiv', component: MultdivComponent},
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
