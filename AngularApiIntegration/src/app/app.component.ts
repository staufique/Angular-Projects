import { Component } from '@angular/core';
import {CollegesDataService} from './services/colleges-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApiIntegration';
  colleges:any;
  constructor(private collegeData:CollegesDataService)
  {
    collegeData.users().subscribe((data)=>
      this.colleges=data
    );
  }
}
