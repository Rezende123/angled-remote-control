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

  private scale(yMin, yMax, xMin, xMax, input) {
    const percent = (input - yMin) / (yMax - yMin);
    const output = percent * (xMax - xMin) + xMin;
    return output;
  }

  convert(orientation: GyroscopeOrientation) {
    if (!orientation || (orientation.x === 0 && orientation.y === 0)) {
      this.angle = null;
      return;
    }

    const setAngleByScale = (min, max) => {
      const angle = this.scale(0, 1, min, max, orientation.y);
      this.angle = Math.floor(angle);
    };

    if (orientation.x > 0) {
      setAngleByScale(1, 180);
    } else {
      setAngleByScale(181, 360);
    }
  }
}
