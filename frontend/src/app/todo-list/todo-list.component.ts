import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendapiService } from '../backendapi.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  constructor(private api:BackendapiService,private router:Router){}
  
  Todolist: any[] = [];
  ngOnInit(){
    this.api.fetchData().subscribe((res:any)=>{
      this.Todolist = res.data
    })
}
}
