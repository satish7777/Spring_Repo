import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import { AuthenticationService } from '../services/authentication.service';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterComponent: NgForm;
    user:User;
    submitMessage: String;
    userId: String;
    userName: String;
    constructor( private userService: UserService,
      private authService: AuthenticationService, private routerService: RouterService) { 
        this.user = new User();
      }
  
    ngOnInit() {
    }
  
    signUpUser(signUpForm: NgForm) {
      this.user=signUpForm.value;
      this.authService.createUser(this.user).subscribe(res => {
        this.userService.createUser(this.user).subscribe(response => {
          //this.authService.setUserId(this.user.userId);
        },err=>{
            if(err.status===409){
              this.submitMessage=err.Message;
            }
            this.submitMessage="Invalid Details";
        });
        this.routerService.routeToLogin();
      },err=>{
          this.submitMessage="UserId Already exists. Please choose another userId"
    });
    }
  
  }
  