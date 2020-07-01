import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { AnalogControllerModule } from 'analog-controller';
import { BtnToogleComponent } from './components/btn-toogle/btn-toogle.component';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { DeviceMotion } from '@ionic-native/device-motion/ngx';
import { SliderComponent } from './components/slider/slider.component';
import { Ng5SliderModule } from 'ng5-slider';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommandApiService } from './services/command-api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    HomePageRoutingModule,
    AnalogControllerModule,
    Ng5SliderModule
  ],
  declarations: [
    HomePage,
    BtnToogleComponent,
    SliderComponent
  ],
  providers: [DeviceMotion, ScreenOrientation, CommandApiService]
})
export class HomePageModule {}
