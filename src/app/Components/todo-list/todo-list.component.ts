import { Component, NgModule } from '@angular/core';
import { todoListClass } from '../../Shared/todoListClass';
import { NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent {
    list : todoListClass[]= [
      // new todoListClass("cricket", true),
      // new todoListClass("badminton", true),
      // new todoListClass("khokho", false)
    ]

    newTask=''

    handleNewTask(){
      this.list.push(new todoListClass(this.newTask,false))
      this.newTask=''
    }

    handleChecked(e: todoListClass){
      e.isCompleted= !e.isCompleted
    }
}
