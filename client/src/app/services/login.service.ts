import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {MatDialog} from '@angular/material';
import {EmptyDialogComponent} from '../components/dialogs/empty-dialog/empty-dialog.component';
import {SheetsService} from './sheets.service';

@Injectable()
export class LoginService {
  private provider = new firebase.auth.GoogleAuthProvider();

  public login(email, password): Promise<1 | 0> {
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
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
    console.log(firebase.auth().currentUser + ' hell');
    if (firebase.auth().currentUser) {
      return Promise.resolve(1);
    } else {
      return Promise.resolve(0);
    }
  };

  public google_signin() {
    return firebase.auth().signInWithPopup(this.provider)
      .then(function (res) {
        const token = res.credential.accessToken;
        const users = JSON.stringify(res.user);
        const info = {
          token: token,
          user: users
        };
        return info;
      }).then((info) => {
        // this.Sheet.testin(info, 'current_session/');     uncomment this line to save current session in firebase
      })
      .catch(() => function (err) {
        this.dialog.open(EmptyDialogComponent, {
          msg: err
        });
      })
  }

  public signout() {
    firebase.auth().signOut();
  }

  constructor(private dialog: MatDialog, private Sheet: SheetsService) {
    this.provider.addScope('https://www.googleapis.com/auth/spreadsheets');
    this.provider.setCustomParameters({
      'login_hint': 'pr.iitkms@gmail.com'
    });
  }

}
