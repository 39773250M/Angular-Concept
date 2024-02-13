import { Component } from '@angular/core';
import { TaskServiceService } from '../Service/TaskService/task-service.service';
import { Task } from './../interface/task';
import { FormsModule, ReactiveFormsModule,Validators,FormGroup,FormControl } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent{

  profileForm = new FormGroup({
    title :new FormControl('', Validators.required),
    description : new FormControl('',Validators.required),
    date :new FormControl('', Validators.required),
    status : new FormControl('',Validators.required),
    addTask:new FormControl('',Validators.required)

  });

  task: Task = {
    title: '',
    description: '',
    dueDate: new Date(),
    status: false,
  };

  constructor(private taskserviceService: TaskServiceService) {

  }
  

  addTask(): void {
    this.taskserviceService.addTask(this.task);
    this.resetForm();
  }


  private resetForm(): void {
    this.task = {
      title: '',
      description: '',
      dueDate: new Date(),
      status: false,
    };
  }
}
