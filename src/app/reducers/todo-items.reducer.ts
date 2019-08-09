import { TodoItemActionTypes, TodoItemActions } from './../actions/todo-item.actions';
import { TodoItem } from '../TodoItem';

export const todoItemsFeatureKey = 'todoItems';

export interface TodoItemState {
  todoitems: Array<TodoItem>
}

export const initialState: TodoItemState = {
  todoitems: []
};

export function todoitemReducer(state = initialState, action: TodoItemActions): TodoItemState {
    switch (action.type) {
        case TodoItemActionTypes.AddTodoItem:
            return {...state, todoitems: [...state.todoitems, action.todoItem] } ;
        case TodoItemActionTypes.RemoveTodoItem:
            return {...state, todoitems: state.todoitems
                .filter(item => item !== action.todoItem) } ;
        case TodoItemActionTypes.EditTodoItem:
            let newItems = state.todoitems.map(item => {
                if(item.Id === action.todoItem.Id)
                    return action.todoItem;
                else
                    return item;
            });
            return {...state, todoitems: newItems};
        default:
            return state;
    }
}
