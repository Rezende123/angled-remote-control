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
      return;
    }

    if (orientation.y > 0) {
      this.angle = 1;
    } else
    if (orientation.y < 0) {
      this.angle = 180;
    } else
    if (orientation.x > 0) {
      this.angle = 90;
    } else
    if (orientation.x < 0) {
      this.angle = 270;
    }
  }
}
