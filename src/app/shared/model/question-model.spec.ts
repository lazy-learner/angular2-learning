/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {QuestionModel} from './question-model';

describe('QuestionModel', () => {
  it('should create an instance', () => {
    expect(new QuestionModel(1)).toBeTruthy();
  });
});
