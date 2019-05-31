import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/modals/Todo';
import {TodoService } from '../../Services/todo.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();


  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  // set dynamic classes
  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo){
    console.log('toggle');

    // taggle UI
    todo.completed = !todo.completed;

    // taggle server
    this.todoService.toggleCompleted(todo).subscribe(todo=> console.log(todo));
  }

  onDelete(todo){
    console.log('delete');
    this.deleteTodo.emit(todo)
  }

}
