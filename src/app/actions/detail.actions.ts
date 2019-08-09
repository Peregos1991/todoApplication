import { TodoItem } from './../TodoItem';
import { Action } from '@ngrx/store';

export enum DetailActionTypes {
  ShowItemDetail = '[Detail] Select showned item details',
  UnselectItemDetail = '[Detail] Hide showned item details'
}

export class ShowItemDetail implements Action {
  readonly type = DetailActionTypes.ShowItemDetail;

  constructor(public todoItem: TodoItem){}
}

export class UnselectItemDetail implements Action {
    readonly type = DetailActionTypes.UnselectItemDetail;

    constructor(public id: string){}
}

export type DetailActions = ShowItemDetail | UnselectItemDetail;
