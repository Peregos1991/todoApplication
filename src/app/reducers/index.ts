import { DetailState, detailReducer } from './detail.reducer';
import { TodoItemState, todoitemReducer } from './todo-items.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';


export interface State {
  todoitem: TodoItemState,
  shownedItem: DetailState
}

export const reducers: ActionReducerMap<State> = {
  todoitem: todoitemReducer,
  shownedItem: detailReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectTodoItemState = (state: State) => state.todoitem;

export const selectTodoItemList = createSelector(selectTodoItemState,
    (state: TodoItemState) => state.todoitems)
