import { Component, OnInit, Pipe } from '@angular/core';
import { TaskServiceService } from '.././Service/TaskService/task-service.service';
import { Task } from '../interface/task';

import { pipe } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from '../task-form/task-form.component';
import { RouterOutlet } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { SearchPipe } from '../Pipes/search.pipe';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule,TaskFormComponent,RouterOutlet,DatePipe,CurrencyPipe,SearchPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit  {

  constructor(private taskServiceService:TaskServiceService){}
  tasks:any = [];
  selectedTaskIndex: number | null = null;

  ngOnInit():void{
    this.tasks = this.taskServiceService.getTasks();
  }

  editTask(index: number): void {
    this.selectedTaskIndex = index;
  }

  saveTaskChanges(updatedTask: Task): void {
    if (this.selectedTaskIndex !== null) {
      this.taskServiceService.editTask(this.selectedTaskIndex, updatedTask);
      this.selectedTaskIndex = null;
    }
  }

  cancelEdit(): void {
    this.selectedTaskIndex = null;
  }

  deleteTask(index: number): void {
    this.taskServiceService.deleteTask(index);
    if (this.selectedTaskIndex === index) {
      this.selectedTaskIndex = null;
    }
  }


  nameString = '';
  employees = [{
      firstName: 'Rohit',
      lastName: 'Sharma',
      dept: 'Finance',
      salary: 5000,
      doj: new Date('2012-04-22')
    }, 
    {
      firstName: 'Aditi',
      lastName: 'Mishra',
      dept: 'Sales',
      salary: 6000,
      doj: new Date('2016-09-16')
    }, 
    {
      firstName: 'Dipti',
      lastName: 'Singh',
      dept: 'IT',
      salary: 10000,
      doj: new Date('2021-09-03')
    }
  ]
 
  addUser(){
    this.employees.push({
      firstName: 'Rahul',
      lastName: 'Yadav',
      dept: 'HR',
      salary: 8000,
      doj: new Date('2016-11-19')
    })
  }
 
  reset(){
    this.employees = this.employees.slice(1)
  }
}
