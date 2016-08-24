/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {FormModel} from './form-model';

describe('FormModel', () => {
  it('should create an instance', () => {
    expect(new FormModel("test")).toBeTruthy();
  });
});
