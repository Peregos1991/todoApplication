import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoItem } from './TodoItem';

@Component({
    selector: 'todo-item-form',
    templateUrl: './todo-item-form.component.html',
    styleUrls: ['./todo-item-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemFormComponent implements OnInit {
    @Output() create = new EventEmitter();

    form: FormGroup;

    constructor() {}

    ngOnInit() {
        this.form = new FormGroup({
            title: new FormControl(''),
            location: new FormControl(''),
            date: new FormControl(''),
            description: new FormControl('')
        });
    }

    onSubmit(formData) {
        let todoItem = new TodoItem;
        todoItem.Title = formData.title;
        todoItem.Location = formData.location;
        todoItem.Date = new Date(formData.date);
        todoItem.Description = formData.description;

        this.create.emit(todoItem);
    }
}
