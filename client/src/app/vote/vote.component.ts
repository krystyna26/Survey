import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PollService} from './../poll.service'

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  id;
  oneSurvey;
  allSurveys;
  
  constructor(private _pollService: PollService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // send id from route
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    
    // show particular survey
    this.oneSurvey = this._pollService.showSurvey(this.id, 
    (data) => { this.oneSurvey = data;
    })
  }

  onVoteButton(surveyID, answer){
    this._pollService.voteOnThisSurvey(surveyID, answer);
    this.ngOnInit();
  }
}
