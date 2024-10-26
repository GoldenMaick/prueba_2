import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APIservicioService } from '../servicio/apiservicio.service';
import { RespApiComponent } from '../componentes/resp-api/resp-api.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule
  ],
  providers:[APIservicioService],   
  declarations: [HomePage,RespApiComponent]
})
export class HomePageModule {}
