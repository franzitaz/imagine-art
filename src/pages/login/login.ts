import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

import {User} from '../../models/user/user.interface';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@IonicPage()
@Component({
selector: 'page-login',
templateUrl: 'login.html',
})
export class LoginPage {

user = {} as User;

userRef$ : FirebaseListObservable<User[]>

test : FirebaseListObservable<any>;


constructor(public navCtrl: NavController, private database: AngularFireDatabase) 
{

}



goToSignup():void
{

  this.navCtrl.push(SignupPage);
}

goToTabs():void
{



  //console.log();
  this.navCtrl.push(TabsPage);
}
}
