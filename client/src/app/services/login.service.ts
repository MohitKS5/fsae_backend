import {Injectable} from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class LoginService {
  public _user: boolean = false;

  public login(email, password): Promise<1 | 0> {
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(function () {
        return firebase.auth().signInWithEmailAndPassword(email, password)
          .then(
            () => {
              // this._user = true;
              return Promise.resolve(1);
            })
      })
      .catch(function (error) {
        const errorMessage = error.message;
        return Promise.reject(errorMessage);
      })
  }

  public checklog = (): Promise<1 | 0> => {
    console.log(firebase.auth().currentUser+' hell');
    if (firebase.auth().currentUser) {
      return Promise.resolve(1);
    } else {
      return Promise.resolve(0);
    }
  };

  public signout() {
    firebase.auth().signOut();
  }

  constructor() {
  }

}
