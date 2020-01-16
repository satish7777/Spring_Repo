import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './services/authentication.service';
import { RouterService } from './services/router.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private authservice:AuthenticationService,private routerservice:RouterService ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      

      const bearerToken=localStorage.getItem('bearerToken');

     // console.log("Guard "+bearerToken);

      if(bearerToken!=null)
      {
        // const authStatus= this.authservice.isUserAuthenticated(bearerToken).then(
        //   (data)=>{
        //     return data;
        //   },
        //   err=>{
        //     console.log(err);
        //   });
          
        //   authStatus.then(result=>{
        //     //console.log("Final Result "+result);
        //   })

        //   if(authStatus)
        //   {
        //     return true
        //   }
        return true;
      }
      else
      {
        this.routerservice.routeToLogin();
        return false;
      }
  }
}
