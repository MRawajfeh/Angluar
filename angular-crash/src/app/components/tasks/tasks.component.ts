import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  //taskService: TaskService;

  constructor(private taskService: TaskService) { 
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe( (tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    console.log("calling delete task from task component " + task.id);
    this.taskService.deleteTask(task.id)
    .subscribe(() => {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
    });
  }

}

