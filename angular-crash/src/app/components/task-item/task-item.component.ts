import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task;
  @Output() deleteClick: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    this.deleteClick.emit(task);
  }

}
