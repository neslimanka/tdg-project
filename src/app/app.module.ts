import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartjsModule } from 'ng-chartjs';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IvmeComponent } from './ivme/ivme.component';
import { IvmeBirComponent } from './ivmeBir/ivmeBir.component';
import { IvmeIkiComponent } from './ivmeIki/ivmeIki.component';

@NgModule({
  declarations: [			
    AppComponent,
      IvmeComponent,
      IvmeBirComponent,
      IvmeIkiComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgChartjsModule,
    ChartsModule,
    CommonModule,
    
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
