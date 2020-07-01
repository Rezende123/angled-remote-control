/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommandApiService } from './command-api.service';

describe('Service: CommandApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommandApiService]
    });
  });

  it('should ...', inject([CommandApiService], (service: CommandApiService) => {
    expect(service).toBeTruthy();
  }));
});
