import {Injectable} from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class LoginService {
  public login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }

  public checklog() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
      } else {
        console.log('nouser');
      }
    });
}

public signout() {
    firebase.auth().signOut();
}

  constructor() {
  }

}
