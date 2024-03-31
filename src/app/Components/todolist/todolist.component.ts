import { Component } from '@angular/core';
import { TodoArray } from '../../Shared/data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
 todoList: TodoArray[]=[
  new TodoArray("playCricket",true),
  new TodoArray("chess",false),
  new TodoArray("volleyball",true),
 ]

  newDesc=""
  selectValue: string="0"

  get valueToShow(): TodoArray[]{
    if(this.selectValue==="1"){
      console.log(true)
      return this.todoList.filter(v=>v.isDone)
    }
    else if(this.selectValue==="2"){
      console.log(false)
      return this.todoList.filter(v=>v.isDone===false)
    }
    else{
      return this.todoList
    }
  };

handleCheck(item:TodoArray){
    item.isDone=!item.isDone
 }

 handleSubmit(){
  this.todoList.push(new TodoArray(this.newDesc))
  this.newDesc=""
 }

}
