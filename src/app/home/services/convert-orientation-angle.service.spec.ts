/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConvertOrientationAngleService } from './convert-orientation-angle.service';

describe('Service: ConvertOrientationAngle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvertOrientationAngleService]
    });
  });

  it('should ...', inject([ConvertOrientationAngleService], (service: ConvertOrientationAngleService) => {
    expect(service).toBeTruthy();
  }));
});
