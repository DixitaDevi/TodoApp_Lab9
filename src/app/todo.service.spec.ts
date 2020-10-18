import { TestBed } from '@angular/core/testing';

import { TodoEntry } from './todo.service';

describe('TodoService', () => {
  let service: TodoEntry;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoEntry);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
