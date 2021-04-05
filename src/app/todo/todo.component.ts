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
  public path: any;

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params .subscribe(params => {
      this.path = params['status']
      this.getTodos(this.path);
    })
  }

  addTodo(){
    this.todoService.add({title: this.newTodo, isDone: false }).then(() => {
      return this.getTodos();
    }).then(() => {
      this.newTodo = '';
    })
  }

  getTodos(query = ''){
    return this.todoService.get().then(todos => {
      this.todos = todos;
      this.activeTasks = this.todos.filter((todo: any) => !todo.isDone).length;
    })
  }

  updateTodo(todo: any, newValue: any){
    todo.title = newValue;
    return this.todoService.put(todo).then(() => {
      todo.editing = false;
      return this.getTodos();
    });
  }

  destroyTodo(todo: any){
    this.todoService.delete(todo).then(() => {
      return this.getTodos();
    });
  }

  clearCompleted(){
    this.todoService.deleteCompleted().then(() => {
      return this.getTodos();
    });
  }

  toggleTodo(todo: any){
    this.todoService.toggle(todo).then(() => {
      return this.getTodos();
    })
  }
}
