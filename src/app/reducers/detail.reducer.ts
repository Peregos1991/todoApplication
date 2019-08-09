import { DetailActions, DetailActionTypes } from './../actions/detail.actions';
import { TodoItem } from '../TodoItem';

export interface DetailState {
    selectedItem: TodoItem;
}

export const initialState: DetailState = {
    selectedItem: new TodoItem
};

export function detailReducer(state = initialState, action: DetailActions): DetailState {
    switch (action.type) {
        case DetailActionTypes.ShowItemDetail:
            return {...state, selectedItem: action.todoItem};
        case DetailActionTypes.UnselectItemDetail:
            if(state.selectedItem && state.selectedItem.Id === action.id)
                return {...state, selectedItem: null};
            return state;
        default:
    return state;
    }
}
