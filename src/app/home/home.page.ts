import { Component, OnInit } from '@angular/core';
import { ConvertOrientationService } from './services/convert-orientation.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { DeviceMotion, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  angle: number;
  velocity = 25;
  isGyroControl: boolean;

  constructor(
    private deviceMotion: DeviceMotion,
    private orientationService: ConvertOrientationService,
    private screenOrientation: ScreenOrientation,
    private statusBar: StatusBar
  ) { }

  ngOnInit(): void {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.statusBar.backgroundColorByHexString('#ecf0f3');

    this.configureGyroscope();

    this.orientationService
      .angle.subscribe(angle => this.setAngleByGyro(angle));

    this.orientationService
      .velocity.subscribe(velocity => this.setVelocityByGyro(velocity));
  }

  private setAngleByGyro(angle: number) {
    if (this.isGyroControl) {
      this.angle = angle;
    }
  }

  private setVelocityByGyro(velocity: number) {
    if (this.isGyroControl) {
      this.velocity = velocity;
    }
  }

  private configureGyroscope() {
    const options: DeviceMotionAccelerometerOptions = {
      frequency: 1000
    };
    this.deviceMotion.watchAcceleration(options)
      .subscribe(orientation => this.orientationService.convert(orientation));
  }
}
