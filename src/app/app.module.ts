import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Todo } from './todo/todo.component';
import { TodoBox } from './todobox/todobox.component';
import { TodoList } from './todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    Todo,
    TodoBox,
    TodoList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
