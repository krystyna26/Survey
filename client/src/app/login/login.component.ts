import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PollService} from './../poll.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    first_name: ""
  }
  constructor(private _pollService: PollService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this._pollService.setUserName(this.user.first_name); // setName
    this.router.navigate(['home']);
    this.user ={
      first_name: ""
    }
  }
}
