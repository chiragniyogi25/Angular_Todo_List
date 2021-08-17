import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() i:number;
  @Input() todo1:Todo;
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();// emitting the todo that has to be deleted
  @Output() todoCheckBox:EventEmitter<Todo>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick(todo1:Todo){
    this.todoDelete.emit(todo1);
    console.log("On Click has been trigerred");
  }
  onCheckBoxClick(todo1:Todo){
    this.todoCheckBox.emit(todo1);
  }

}
