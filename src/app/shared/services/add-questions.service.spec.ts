/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AddQuestionsService } from './add-questions.service';

describe('Service: AddQuestions', () => {
  beforeEach(() => {
    addProviders([AddQuestionsService]);
  });

  it('should ...',
    inject([AddQuestionsService],
      (service: AddQuestionsService) => {
        expect(service).toBeTruthy();
      }));
});
