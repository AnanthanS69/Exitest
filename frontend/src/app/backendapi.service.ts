import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendapiService {
  data:any

  constructor( private http:HttpClient) { }

  addTodoData(data:any){
    console.dir('Data:', data);
    return this.http.post<any>("http://localhost:3000/api/addtodo", data);
  }

  fetchData(){
    //console.log('Sending request')
    return this.http.get('http://localhost:3000/api/fetchdata');
  }












}
