import { UUID } from 'angular2-uuid';
import { MapService } from './map.service';
import { ShowItemDetail, UnselectItemDetail } from './actions/detail.actions';
import { TodoItem } from './TodoItem';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectTodoItemList } from './reducers/index';
import { RemoveTodoItem, AddTodoItem, EditTodoItem } from './actions/todo-item.actions';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'todo-root',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
    filterString = "";
    todoItems: Array<TodoItem>;
    filteredTodoItems: Array<TodoItem>;
    selectedItem: TodoItem;
    filterSubject$ = new Subject<string>();

    constructor(private store: Store<State>, private mapService: MapService, private cdr: ChangeDetectorRef){
        store.select(selectTodoItemList)
            .subscribe( items => {
                this.todoItems = items;
                this.filterTodoItems();
            });

        store.select(state => state.shownedItem)
            .subscribe( selection => this.selectedItem = selection.selectedItem || new TodoItem)

        this.filterSubject$
            .pipe(debounceTime(200))
            .subscribe(x => {
                this.filterString = x;
                this.filterTodoItems();
                this.cdr.detectChanges();
            });
    }

    private filterTodoItems(): void {
        if(this.filterString)
            this.filteredTodoItems = this.todoItems.filter(item => item.Title.indexOf(this.filterString) >= 0)
        else
            this.filteredTodoItems = this.todoItems;

        if(this.selectedItem && this.selectedItem.Id && !this.filteredTodoItems.some(item => item.Id === this.selectedItem.Id))
            this.store.dispatch(new UnselectItemDetail(this.selectedItem.Id));
    }

    onCreate(item: TodoItem) {
        item.MapUrl = this.mapService.createMapUrl(item.Location);
        item.Id = UUID.UUID();

        this.store.dispatch(new AddTodoItem(item));
    }

    onSelection(item: TodoItem){
        if(this.selectedItem.Id === item.Id) {
            this.store.dispatch(new UnselectItemDetail(item.Id));
        } else {
            this.store.dispatch(new ShowItemDetail(item));
        }
    }

    onEdit(item: TodoItem) {
        item.MapUrl = this.mapService.createMapUrl(item.Location);

        this.store.dispatch(new EditTodoItem(item));
    }

    onClose(item) {
        this.store.dispatch(new RemoveTodoItem(item));
    }

    filterChanged($event) {
        this.filterSubject$.next($event);
    }
}
