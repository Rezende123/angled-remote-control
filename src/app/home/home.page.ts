import { Component, OnInit } from '@angular/core';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';
import { ConvertOrientationAngleService } from './services/convert-orientation-angle.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  angle: number;
  isGyroControl: boolean;

  constructor(
    private gyroscope: Gyroscope,
    private orientationAngleService: ConvertOrientationAngleService
  ) { }

  ngOnInit(): void {
    this.configureGyroscope();
    this.orientationAngleService
      .angle.subscribe(angle => this.setAngleByGyro(angle));
  }

  private setAngleByGyro(angle: any) {
    if (this.isGyroControl) {
      this.angle = angle;
    }
  }

  private configureGyroscope() {
    const options: GyroscopeOptions = {
      frequency: 1000
    };
    this.gyroscope.watch(options)
      .subscribe(orientation => this.orientationAngleService.convert(orientation));
  }
}
