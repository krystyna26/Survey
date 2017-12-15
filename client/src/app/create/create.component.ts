import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PollService} from './../poll.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  surveys;

  sur = {
    question:"",
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:"",
  }

  constructor(private _pollService: PollService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    //ad survey
    this._pollService.addSurvey(this.sur.question, this.sur.answer1, this.sur.answer2, this.sur.answer3, this.sur.answer4);
    // go to homepage
    this.router.navigate(['home']);
    this.sur = {
      question:"",
      answer1:"",
      answer2:"",
      answer3:"",
      answer4:"",
    }
  }
}
