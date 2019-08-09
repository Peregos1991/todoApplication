import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TodoItem } from './TodoItem';

@Component({
    selector: 'todo-item-details',
    templateUrl: './todo-item-details.component.html',
    styleUrls: ['./todo-item-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemDetailsComponent{
    @Input() element: TodoItem;
    @Output() edit = new EventEmitter();

    detailform: FormGroup;

    constructor() {}

    ngOnInit() {
        let tzoffset = (this.element.Date).getTimezoneOffset() * 60000;
        let localISOTime = (new Date(this.element.Date.getTime() - tzoffset)).toISOString().slice(0, 16);

        this.detailform = new FormGroup({
            location: new FormControl(this.element.Location),
            date: new FormControl(localISOTime),
            description: new FormControl(this.element.Description)
        });
    }

    onContentChange(formData) {
        let todoItem = new TodoItem;
        todoItem.Location = formData.location;
        todoItem.Date = new Date(formData.date);
        todoItem.Description = formData.description;
        todoItem.Id = this.element.Id;
        todoItem.Title = this.element.Title;

        this.edit.emit(todoItem);
    }
}
