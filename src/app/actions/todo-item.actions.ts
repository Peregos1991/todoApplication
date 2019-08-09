import { TodoItem } from './../TodoItem';
import { Action } from '@ngrx/store';

export enum TodoItemActionTypes {
  AddTodoItem = '[TodoItem] Add TodoItem',
  RemoveTodoItem = '[TodoItem] Remove TodoItem',
  EditTodoItem = '[TodoItem] Edit TodoItem'
}

export class AddTodoItem implements Action {
  readonly type = TodoItemActionTypes.AddTodoItem;

  constructor(public todoItem: TodoItem){}
}

export class RemoveTodoItem implements Action {
  readonly type = TodoItemActionTypes.RemoveTodoItem;

  constructor(public todoItem: TodoItem){}
}

export class EditTodoItem implements Action {
  readonly type = TodoItemActionTypes.EditTodoItem;

  constructor(public todoItem: TodoItem){}
}

export type TodoItemActions = AddTodoItem | RemoveTodoItem | EditTodoItem;
