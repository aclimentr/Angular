import { Component } from '@angular/core';
import { ITask } from './models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  task: ITask = {
    id: 1,
    title: "Estudiar Angular",
    status: false,
    hours: 10
  }

  idSize: string = "30px";
  idBg: string = "blue";
  fontColor: string = "red";
}
