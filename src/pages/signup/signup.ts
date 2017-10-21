import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import {User} from '../../models/user/user.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as User;

  userRef$ : FirebaseListObservable<User[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, public toastCtrl: ToastController) {

    this.userRef$ = this.database.list('user');

  }

  
  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Você se inscreveu com SUCESSO!',
      duration: 4000,
      position: position
    });

    toast.present(toast);
  }

  register(user: User){
    
      this.userRef$.push({
        nome: this.user.nome  || "",
        email: this.user.email || "",
        senha: this.user.senha || "",
        genero: this.user.genero || ""
      });

      user = {} as User;

      this.navCtrl.pop();

  }

  public type = 'password';
  public showPass = false;
 
 
  showPassword() {
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
