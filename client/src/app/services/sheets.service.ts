import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {config, googleSheetsUrl} from '../config/firebase';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as firebase from 'firebase';
import 'rxjs/add/observable/fromPromise';


firebase.initializeApp(config);

@Injectable()
export class SheetsService {

  constructor(private http: Http) {
  }

  getsheetfromfirebase(sheet: number): Observable<any> {
    let _data;
    return Observable.fromPromise(firebase.database().ref('/data/' + sheet).once('value')
      .then(function (snapshot) {
        return JSON.parse(snapshot.val().content).feed.entry;
      }));
  }

  getfromfirebase(path: string): Observable<any> {
    let _data;
    return Observable.fromPromise(firebase.database().ref(path).once('value')
      .then(function (snapshot) {
        return JSON.parse(snapshot.val())
      }));
  }

  getJsonData(unique_identifier): Observable<any> {
    console.log(unique_identifier);
    const sheetUrl = 'https://spreadsheets.google.com/feeds/list/' +
      googleSheetsUrl +
      '/' + unique_identifier +
      '/public/values?alt=json';
    return this.http.get(sheetUrl)
      .map((res) => {
      console.log(res.json().feed.entry);
      return res.json().feed.entry;
      })
      .catch(SheetsService.handleError);
  }

  testin(body, sheet) {
    firebase.database().ref('data/' + sheet).set({
      content : body
    })
      .then(function(){
      console.log('saved to firebase');
    })
      .catch(function(err){
      console.log(err+'what the fuck')
    });
  }
  getSheetsData(unique_identifier, parser?): Observable<any> {
    const pseudo_obj = {'start': 'start'}, object = [];
    object.push(pseudo_obj);
    object.push(pseudo_obj);
    return this.getJsonData(unique_identifier)
      .map(e => {
        e.map(f => {
          object.push(SheetsService.extractCols(f, parser))
        });
      })
      .map(() => object)
  }

  private static extractCols(f, parser?): Object {
    let obj = Object();
    for (let x in f) {
      if (f.hasOwnProperty(x)) {
        let prop = x.split('$');
        if (prop[0] === 'gsx')
          if (parser) {
            obj[prop[1]] = parser(f[x].$t, f, x);
          } else {
            obj[prop[1]] = f[x].$t.replace('</p>', '').split(`<p>`);
          }
      }
    }
    return obj;
  }

  private static handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
