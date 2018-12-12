import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['../bootstrap.css']
})
export class TaskComponent implements OnInit {
  @Input() getTask: any;
  constructor() { }

  ngOnInit() {
  }

}
