import { UnselectItemDetail } from './../actions/detail.actions';
import { TodoItemActionTypes, RemoveTodoItem } from './../actions/todo-item.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoItemsEffects {

    @Effect()
    checkTodoItemSelection$: Observable<any> = this.actions$.pipe(
        ofType(TodoItemActionTypes.RemoveTodoItem),
        map(action => new UnselectItemDetail(action.todoItem.Id))
    );

    constructor(private actions$: Actions<RemoveTodoItem>) {}
}
