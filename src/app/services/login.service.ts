import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {promise} from 'selenium-webdriver';

@Injectable()
export class LoginService {
  public _user;

  public login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        () => {
          this._user = true;
          return 1;
        }
      ).catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      return 0;
    })
  }

  public checklog = (): Promise<1 | 0> => {
    if (this._user) {
      return Promise.resolve(1);
    } else {
      console.log('wtf');
      return Promise.resolve(0);
    }
  };

  public signout() {
    firebase.auth().signOut();
  }

  constructor() {
  }

}
