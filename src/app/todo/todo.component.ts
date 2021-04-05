import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  public todos: any;
  public activeTasks: any;
  public newTodo: any;

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    return this.todoService.get().then(todos => {
      this.todos = todos;
      this.activeTasks = this.todos.filter((todo: any) => !todo.isDone).length;
    })
  }
  

}
