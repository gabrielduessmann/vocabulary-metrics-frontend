import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeMetricsComponent } from './practice-metrics/practice-metrics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { ChartsModule } from 'ng2-charts';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PracticeMetricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
  
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
