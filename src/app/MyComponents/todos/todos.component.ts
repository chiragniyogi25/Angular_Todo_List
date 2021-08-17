import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  localItem:string;
  constructor() { 
    this.localItem = localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos=[];
    }else{
      // console.log()
      this.todos=JSON.parse(this.localItem);
    }
    // this.todos=[
    //   // {
    //   //   sno:1,
    //   //   title:"This is title1",
    //   //   desc:"Description1",
    //   //   active:true
    //   // },
    //   // {
    //   //   sno:2,
    //   //   title:"This is title2",
    //   //   desc:"Description2",
    //   //   active:true
    //   // },{
    //   //   sno:3,
    //   //   title:"This is title3",
    //   //   desc:"Description3",
    //   //   active:true
    //   // }
      
    // ]
  }

  ngOnInit() {
  }
  deleteTodo(todo:Todo){//eventEmitter from todo-item-component.ts is of Todo class type
    console.log(todo);
    const index = this.todos.indexOf(todo);//locating index of todo object in the array
    this.todos.splice(index,1);//to reomove the dodo object from the array of selected button
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
  addTodo(todo:Todo){//eventEmitter from add-todo-component.ts is of Todo class type
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  ToggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
    console.log(todo);
  }
}
