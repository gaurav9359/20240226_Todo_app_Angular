import { Component } from '@angular/core';
import { TodolistComponent } from './Components/todolist/todolist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
