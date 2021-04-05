import { Injectable } from '@angular/core';

let TODOS =  [
  { title: "Hive", isDone: true },
  { title: "Qualis Capital", isDone: true },
  { title: "Loree", isDone: true },
  { title: "Xen",  isDone: true },
  { title: "PowerWrap", isDone: true }
]
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  get(query = '') {
    return new Promise(resolve => {
      let data;

      if(query === 'completed' || query === 'active'){
        const isCompleted = query === 'completed';
        data = TODOS.filter(todo => todo.isDone === isCompleted);
      } else {
        data = TODOS;
      }
      resolve(data);
    })

  }
  add(data: any){
    return new Promise(resolve => {
      TODOS.push(data);
      resolve(data);
    })
  }

  put(changed: any) {
    return new Promise(resolve => {
      const index = TODOS.findIndex(todo => todo === changed);
      TODOS[index].title = changed.title;
      resolve(changed)
    })
  }

  delete(selected: any){
    return new Promise(resolve => {
      const index = TODOS.findIndex(todo => todo === selected);
      TODOS.splice(index, 1);
      resolve(true)
    })
  }

  deleteCompleted(){
    return new Promise(resolve => {
      TODOS = TODOS.filter(todo => !todo.isDone);
      resolve(TODOS);
    })
  }

  toggle(selected: any){
    selected.isDone = !selected.isDone;
    return Promise.resolve();
  }
}
