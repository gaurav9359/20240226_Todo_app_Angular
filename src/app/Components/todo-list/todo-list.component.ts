import { Component } from '@angular/core';
import { todoListClass } from '../../Shared/todoListClass';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
    list= [
      new todoListClass("cricket", true),
      new todoListClass("badminton", true),
      new todoListClass("khokho", false)

    ]
}
