import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

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
  private localstorage:Localstorage, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  showToast (position: string) {
    // tslint:disable-next-line:prefer-const
    let toast = this.toastCtrl.create({
      message: 'Algo deu errado! Verifique sua internet.',
      duration: 2000,
      // tslint:disable-next-line:object-literal-shorthand
      position: position,
      cssClass: 'center'
    });

    toast.present(toast);
  }

  goToSignup():void {
    this.navCtrl.push(SignupPage);
  }

  goToTabs(user: User):void {

    const loading = this.loadingCtrl.create();
    loading.present();

    const email = user.email;
    const senha = user.senha;
  
    if (email === undefined || senha === undefined || email === '' || senha === '') {

      loading.dismiss(); 
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
            loading.dismiss(); 
            resolve(response.json());
            
          })
          .catch((error) => {
            console.error('API Error : ', error.status);
            console.error('API Error : ', JSON.stringify(error));
            loading.dismiss(); 
            this.showToast('middle');
            reject(error.json());
          });
      });
    }
  }
}
