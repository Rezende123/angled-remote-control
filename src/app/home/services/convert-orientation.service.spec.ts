/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConvertOrientationService } from './convert-orientation.service';

describe('Service: ConvertOrientationAngle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvertOrientationService]
    });
  });

  it('should ...', inject([ConvertOrientationService], (service: ConvertOrientationService) => {
    expect(service).toBeTruthy();
  }));
});
