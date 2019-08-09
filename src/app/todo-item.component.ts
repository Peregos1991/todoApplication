import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TodoItem } from './TodoItem';

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
    @Input() element: TodoItem;
    @Input() selected: boolean;
    @Output() select = new EventEmitter();
    @Output() close = new EventEmitter();

    onItemClick() {
        this.select.emit(this.element);
    }

    onCloseClick(){
        this.close.emit(this.element);
    }
}
