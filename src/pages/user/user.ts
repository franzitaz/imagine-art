import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Localstorage } from '../../providers/localstorage';
import { Http, Headers, RequestOptions } from '@angular/http';

import { ProfilePage } from '../profile/profile';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})

export class UserPage {
  
  users = [];
  searchResult = [];
  currentlyUserID;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
        // public toastCtrl: ToastController,
        private http: Http,
        public localstorage:Localstorage) {
  
    this.localstorage = localstorage;
    this.localstorage.getSearch().then((search) => {

      if (search === undefined || search === null) {
  
        this.getUsers();
          
      } else {
          
        this.localstorage.getUser('').then((user) => {

          this.users = search;
          this.currentlyUserID = user._id;

          // console.log('++++++++++++++++');
          // console.log(search);
          // console.log('------------------');
          // console.log(this.currentlyUserID);
          // console.log('++++++++++++++++');

          this.localstorage.setSearch(undefined);

        });
          
      }

    });
  
  }

  goToProfile(userID) {
    this.localstorage.setProfileID(userID);
    this.navCtrl.push(ProfilePage);
  }
  
  getUsers() {
  
    this.localstorage.getSearch().then((nome) => {
  
        // tslint:disable-next-line:no-var-keyword
      var headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
    
        // tslint:disable-next-line:object-literal-shorthand
      let options = new RequestOptions({ headers: headers });
  
        // tslint:disable-next-line:prefer-const
      let data = JSON.stringify({
        name: nome
      });
  
      new Promise((resolve, reject) => {
        this.http.post('https://imagine-art.herokuapp.com/user/searchProfile/',data, options)
          .toPromise()
          .then((response) => {
  
            // console.log(response.json().data);
            this.users = response.json().data;
            resolve(response.json());
            
          })
          .catch((error) => {
            console.error('API Error : ', error.status);
            console.error('API Error : ', JSON.stringify(error));
            reject(error.json());
          });
      });
  
    })
    .catch((err) => {
      // tslint:disable-next-line:quotemark
      console.log("Error occurred :", err);
    });
  
  }
  
}
