import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';

  // getData(val:string)
  // {
  //   console.warn(val)
  // }
  // displayval='';
  // getValue(val:string){
  //   console.warn(val)
  //   this.displayval=val
  // }

  // count=0
  // getCount(type:string){
  //   type==='add' ? this.count++:this.count--;
  // }
  // name="Taufique";
  // disable=false;
  // show=true;

  // color='ok';

  //array
  // users=['taufique','akhtar','junaid','imran','shaikh'];

  //object
  // userDetails=[
  //   {name:'taufique',email:'staufique888@gmail.com',no:'9594829866'},
  //   {name:'akhtar',email:'unknown@gmail.com',no:'123456789'},
  //   {name:'junaid',email:'junaid@gmail.com',no:'789546321'},
  // ];

  // users=[
  //   {name:'taufique',phone:'123456', socialAcoounts:['facebook','insta','twitter']},
  //   {name:'akhtar',phone:'222222',socialAcoounts:['youtube','insta','social']},
  //   {name:'junaid',phone:'333333',socialAcoounts:['hackerrank','twitter','twitter']},
  //   {name:'bruce',phone:'444444',socialAcoounts:['snapchat','youtube','twitter']},
  // ];

  // color='red';

  // bgColor="orange"
  // updateColor(){
  //   this.color='green';
  //   this.bgColor='red';
  // }

}
