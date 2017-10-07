import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LoginService } from './login.service';

@Injectable()
export class GuardsService implements CanActivate {

  constructor(private loginService: LoginService,
              private router: Router) { }

  canActivate() {
    return this.loginService.checklog()
      .then((res: 0 | 1 ) => {
        if (res === 0) {
          alert('Please Login First');
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      });
  }
}
