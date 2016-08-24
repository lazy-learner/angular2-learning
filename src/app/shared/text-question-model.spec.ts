/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {TextQuestionModel} from './text-question-model';

describe('TextQuestionModel', () => {
  it('should create an instance', () => {
    expect(new TextQuestionModel("")).toBeTruthy();
  });
});
