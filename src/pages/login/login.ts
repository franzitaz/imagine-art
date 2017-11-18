import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

import {  User } from '../../models/user/user.interface';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Localstorage } from '../../providers/localstorage';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  error = false;

  userRef$ : FirebaseListObservable<User[]>;

  test : FirebaseListObservable<any>;

  constructor (public navCtrl: NavController, private database: AngularFireDatabase, private http: Http, 
  private localstorage:Localstorage) {
  }

  goToSignup():void {

    this.navCtrl.push(SignupPage);
  }

  goToTabs(user: User):void {

    const email = user.email;
    const senha = user.senha;
  
    if (email === undefined || senha === undefined) {

      this.error = true;
    
    } else {

      // tslint:disable-next-line:no-var-keyword
      var headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
    
      // tslint:disable-next-line:prefer-const
      let options = new RequestOptions({ headers: headers });
        
      // tslint:disable-next-line:prefer-const
      let data = JSON.stringify({
        email: user.email,
        password: user.senha
      });
        
      new Promise((resolve, reject) => {
        this.http.post('https://imagine-art.herokuapp.com/user/login/',data, options)
          .toPromise()
          .then((response) => {
            
            if (response.json().code === 200) {
      
              this.localstorage.setUser(response.json().user);
              this.localstorage.setSearch(undefined);
              console.log(response.json().user, 'este é o user bro');
              this.localstorage.getUser('').then((userID) => {
                console.log('Esta eh a resposta do localstorage getuser brow', userID);
              });
              this.navCtrl.push(TabsPage);
    
            }else {
              this.error = true;
            }

            resolve(response.json());
            
          })
          .catch((error) => {
            console.error('API Error : ', error.status);
            console.error('API Error : ', JSON.stringify(error));
            reject(error.json());
          });
      });
    }
  }
}
