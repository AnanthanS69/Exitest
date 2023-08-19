import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { BackendapiService } from '../backendapi.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tlist-create',
  templateUrl: './tlist-create.component.html',
  styleUrls: ['./tlist-create.component.css']
})
export class TlistCreateComponent {

  constructor(private api:BackendapiService,private router:Router){}

  todo={
    name:'',
  }

  onSubmit(){
    //console.log('The form data is:',this.employee);
    // this.api.addEmployeeData(this.employee).subscribe(data=>console.log(data));

    this.api.addTodoData(this.todo).subscribe(
      (data) => {
        console.log('success');
      }
    );
    this.router.navigate(["/home"])
  }


}
