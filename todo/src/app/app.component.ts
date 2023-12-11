import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  list:any[]=[];
  addTask(item:string){
    this.list.push({id:this.list.length,name:item});
    console.warn(this.list)
  }
}