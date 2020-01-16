import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {user} from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:user;
  loginForm: FormGroup;
  submitMessage:string;
  userId = new FormControl();
  userPassword = new FormControl();
  constructor(private formbuilder:FormBuilder,private authservice:AuthenticationService,private routerservice:RouterService){
    this.user=new user();
    this.loginForm = new FormGroup({userId:this.userId, userPassword: this.userPassword});
    this.loginForm=formbuilder.group({
      userId:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      userPassword:['',Validators.compose([Validators.required,Validators.minLength(3)])]
    })
  }

    loginSubmit() {
      this.user=this.loginForm.value;     
      // console.log(loginForm.value.userId);
      // console.log(loginForm.value.userPassword);
      
      this.authservice.authenticateUser(this.user).subscribe(res=>{
        //bearerToken=res['token'];
        console.log("token: "+res['token']);
        this.authservice.setBearerToken(res['token']);
        localStorage.setItem('bearerToken',res['token']);
        localStorage.setItem('userId',res['userId']);
        this.routerservice.routeToDashboard();
      },err=>{
        //console.log(err);
        if(err.status===401){
          this.submitMessage="Unauthorized";
        }else{
          this.submitMessage=err.message;
        }
       
      })

    }

    routeToRegister() {
      this.routerservice.routeToRegister();
    }
}
