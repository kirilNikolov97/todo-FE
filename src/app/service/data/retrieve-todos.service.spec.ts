import { TestBed } from '@angular/core/testing';

import { RetrieveTodosService } from './retrieve-todos.service';

describe('RetrieveTodosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetrieveTodosService = TestBed.get(RetrieveTodosService);
    expect(service).toBeTruthy();
  });
});
