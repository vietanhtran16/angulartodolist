import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-todobox',
    templateUrl: './todobox.component.html'
})

export class TodoBox {
    newItemDescription: string;
    @Output() onAdd = new EventEmitter<string>();

    onAddClick(){
        this.onAdd.emit(this.newItemDescription);
        this.newItemDescription = '';
    }
}