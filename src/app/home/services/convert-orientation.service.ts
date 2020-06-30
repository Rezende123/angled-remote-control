import { Injectable } from '@angular/core';
import { DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConvertOrientationService {

  private _angle = new Subject<number>();
  set angle(angle: any) {
    this._angle.next(angle);
  }
  get angle() {
    return this._angle;
  }

  private _velocity = new Subject<number>();
  set velocity(velocity: any) {
    this._velocity.next(velocity);
  }
  get velocity() {
    return this._velocity;
  }

  constructor() { }

  convert(orientation: DeviceMotionAccelerationData) {
    if (!orientation) {
      this.angle = null;
      return;
    }

    const { x, y } = orientation;
    const scale = (yMin, yMax, xMin, xMax, input) => {
      const percent = (input - yMin) / (yMax - yMin);
      const output = percent * (xMax - xMin) + xMin;
      return output;
    };
    const angleByAxis = axis => Math.round(scale(-10, 10, 1, 180, axis));
    const velocityByAxis = axis => Math.round(scale(-10, 10, -50, 50, axis));

    this.velocity = velocityByAxis(y);
    const angle = angleByAxis(x);

    if (!angle) {
      return;
    } else
    if (y > 0) {
      this.angle = angle;
    } else {
      this.angle = scale(1, 180, 360, 181, angle);
    }
  }
}
