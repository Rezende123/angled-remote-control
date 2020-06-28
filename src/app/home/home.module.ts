import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { AnalogControllerModule } from 'analog-controller';
import { BtnToogleComponent } from './components/btn-toogle/btn-toogle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AnalogControllerModule
  ],
  declarations: [
    HomePage,
    BtnToogleComponent
  ]
})
export class HomePageModule {}
