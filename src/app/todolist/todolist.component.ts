import { Component, Input } from '@angular/core';
import { TodoItem } from '../model/todoItem';

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html'
})

export class TodoList {
    @Input() todoItems: TodoItem[];
}