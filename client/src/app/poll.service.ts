import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable()
export class PollService {

  private name;

  constructor(private _http: Http, private router: Router, private route: ActivatedRoute) { }

  setUserName(name){
    sessionStorage.setItem('name', name);
  }
  getName(){
    return sessionStorage.getItem('name');
  }

  // display all x 
  allSurveys(callback){
    console.log("allSurveys() in poll.service")
    return this._http.get('/all')
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        console.log('Error in allSurveys() - poll.service.ts:',err);
      }
    )
  }

  //add one survey x
  addSurvey(survey){
    this._http.post('/addSurvey', survey)
    .subscribe(
      (response) => {
        console.log('added survey');
      },
      (err) => {
        console.log('Error in addSurveys() poll.service.ts');
      }
    )
  }

  //show one survey - to vote x 
  showSurvey(id,callback){
    return this._http.get(`/show_survey/${id}`)
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        console.log('error in showSurvey() -- poll.service.ts: ',err);
      }
    )
  }

  // vote x 
  voteOnThisSurvey(surveyID,answer){
    return this._http.get(`/vote/${surveyID}/${answer}`)
    .subscribe(
      (response) => {
        console.log('voteOnThisSurvey() -- added vote');
      },
      (err) => {
        console.log('Error in voteOnThisSurvey()!');
      }
    )
  }

  // delete one survey x 
  delete(surveyID){
    this._http.get(`/delete/${surveyID}`)
    .subscribe(
      (response) => {
        console.log('delete() in poll.service - Survey deleted');
      },
      (err) => {
        console.log('delete() in poll.service - Cannot delete survey');
      }
    )
  }
}
