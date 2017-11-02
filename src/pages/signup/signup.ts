import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import {User} from '../../models/user/user.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import {Http, Headers, RequestOptions} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as User;

  userRef$ : FirebaseListObservable<User[]>;

  error = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, public toastCtrl: ToastController,private http: Http) {

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

      const userEmail = user.email;
      const userSenha = user.senha;
      const userNome = user.nome;

      console.log(userEmail, 'USEREMAIL');
      if (userEmail === undefined || userEmail === '' ||
          userSenha === undefined || userSenha === '' ||
          userNome === undefined  || userNome === '') {
          
          if(userEmail === undefined || userEmail === ''){
            this.error = 'Necessita-se digitar o email';
          }else{
            this.error = '';
          }
      }else{

        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json' );
  
          let options = new RequestOptions({ headers: headers });
          
          new Promise((resolve, reject) => {
            this.http.post('https://imagine-art.herokuapp.com/user/signup/',JSON.stringify({
              email: user.email,
              password: user.senha,
              name : user.nome,
            }), options)
            .toPromise()
            .then((response) =>
            {
              console.log('API Response : ', response.json());
              console.log("DATA")
              localStorage.setItem('user', JSON.stringify(response));
              resolve(response.json());
              this.showToast('middle');
              
            })
            .catch((error) =>
            {
              console.error('API Error : ', error.status);
              console.error('API Error : ', JSON.stringify(error));
              reject(error.json());
            });
          });
          this.navCtrl.pop();
        user = {} as User;
  
        
  

      }

      
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
