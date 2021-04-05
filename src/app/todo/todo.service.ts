import { Injectable } from '@angular/core';

const TODOS =  [
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

  get() {
    return new Promise(resolve => resolve(TODOS));
  }
}
