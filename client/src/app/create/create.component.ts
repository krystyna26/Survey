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
    writerName: sessionStorage.getItem('name'),
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
    this._pollService.addSurvey(this.sur);
    // go to homepage
    this.sur = {
      writerName: '',
      question:"",
      answer1:"",
      answer2:"",
      answer3:"",
      answer4:"",
    }
    this.router.navigate(['home']);
  }
}
