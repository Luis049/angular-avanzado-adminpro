import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.Component.css' ]
})
export class LoginComponent {

  constructor( private router: Router ){}

  login (){
    this.router.navigate(['/dashboard'])
  }

}
