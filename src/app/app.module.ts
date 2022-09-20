import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PredictionsListComponent } from './components/predictions-list/predictions-list.component';
import {PredictionService} from "./services/prediction/prediction.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    PredictionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [PredictionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
