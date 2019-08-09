import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TodoItemsEffects } from './todo-items.effects';

describe('TodoItemsEffects', () => {
  let actions$: Observable<any>;
  let effects: TodoItemsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoItemsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<TodoItemsEffects>(TodoItemsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
