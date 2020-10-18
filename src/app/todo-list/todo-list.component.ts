import { Component, OnInit } from '@angular/core';
import { TodoEntry } from '../todo.service';

import { ListDataService } from '../todo-data.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public subscription;
  todo_list : TodoEntry[];
  
  constructor(
    private liService: ListDataService 
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); 
  }

  ngOnInit(): void {
    this.subscription = this.liService.get().subscribe(msg => this.todo_list = msg);
  }

  public delete_todo(i: number): void {
    this.liService.remove(i);
  }
}