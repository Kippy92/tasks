import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap.css']
})

export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){}
  newTask;
  tasks: [];
  this_task;
  edit_task;
    ngOnInit(){
      this.newTask = { title: "", description: "" };
      console.log('hello');
    }

    addTask() {
      let observable = this._httpService.addTask(this.newTask);
      observable.subscribe( data => {
        console.log("Post data: ", data);
        this.newTask = {title: "", description: ""};
        this.getTasks();
      })
    }

    getTasks(){
       let observable = this._httpService.getTasks();
       observable.subscribe(data => {
          console.log("Got our tasks!", data);
          this.tasks = data['tasks'];
       });
    }
    getTask(_id){
      let observable = this._httpService.getTask(_id);
      observable.subscribe(data => {
        console.log(data);
        this.this_task = data['task'];
        console.log('this_task', this.this_task);
      })
    }

    getEditTask(_id){
      let observable = this._httpService.getTask(_id);
      observable.subscribe(data => {
        console.log(data);
        this.edit_task = data['task'];
        console.log('edit_task', this.edit_task);
        this.getTasks();
      })
    }

    editTask(_id){
      console.log(this.edit_task)
      let observable = this._httpService.editTask(_id, this.edit_task);
      observable.subscribe( data => {
        console.log("Edited: ", data);
        this.edit_task = {title: "", description: ""};
        this.getTasks();
      })
    }

    deleteTask(_id){
      let observable = this._httpService.deleteTask(_id);
      observable.subscribe(data => {
        console.log("delete this task", data);
        this.getTasks();
      })
    }
}