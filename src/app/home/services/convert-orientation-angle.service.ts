import { Injectable } from '@angular/core';
import { GyroscopeOrientation } from '@ionic-native/gyroscope/ngx';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConvertOrientationAngleService {

  private _angle = new Subject<number>();
  set angle(angle: any) {
    this._angle.next(angle);
  }
  get angle() {
    return this._angle;
  }

  constructor() { }

  convert(orientation: GyroscopeOrientation) {
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
    const angleByAxis = axis => scale(-.08, .08, 1, 180, axis);

    const angle = angleByAxis(y);
    if (!angle) {
      return;
    } else
    if (x > -.01) {
      this.angle = angle;
    } else {
      this.angle = scale(1, 180, 360, 181, angle);
    }
  }
}
