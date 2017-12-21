import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PollService} from './../poll.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  first_name;
  surveys =[];

  constructor(private _pollService: PollService, private router: Router) { }

  ngOnInit() {
     //getName()
    this._pollService.allSurveys( (data)=> { 
      this.surveys = data;
      this.first_name = this._pollService.getName();
      });
  }

  delete(surveyID){
    this._pollService.delete(surveyID);
    this.ngOnInit();
  }
}
