import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todoItem';

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html'
})

export class TodoList {
    @Input() todoItems: TodoItem[];
    @Output() onRemove = new EventEmitter<number>();

    removeTodo(todoId: number) {
        this.onRemove.emit(todoId);
    }
}