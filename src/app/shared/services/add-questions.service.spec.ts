/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddQuestionsService } from './add-questions.service';

describe('Service: AddQuestions', () => {
  beforeEach(() => {
    TestBed
  });

  it('should ...',
    inject([AddQuestionsService],
      (service: AddQuestionsService) => {
        expect(service).toBeTruthy();
      }));
});
