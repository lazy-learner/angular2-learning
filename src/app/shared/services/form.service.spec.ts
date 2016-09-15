/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { FormService } from './form.service';

describe('Service: FormService', () => {
  beforeEach(() => {
    addProviders([FormService]);
  });

  it('should ...',
    inject([FormService],
      (service: FormService) => {
        expect(service).toBeTruthy();
      }));
});
