import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { User } from '../../models/user/user.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as User;

  tamanhosenha = 0;

  userRef$ : FirebaseListObservable<User[]>;

  error = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private database: AngularFireDatabase, public toastCtrl: ToastController, private http: Http) {

    this.userRef$ = this.database.list('user');

  }

  showToast(position: string) {
    // tslint:disable-next-line:prefer-const
    let toast = this.toastCtrl.create({
      message: 'Você se inscreveu com SUCESSO!',
      duration: 4000,
      // tslint:disable-next-line:object-literal-shorthand
      position: position,
      cssClass: 'center'
    });

    toast.present(toast);
  }

  showToast1(position: string) {
    // tslint:disable-next-line:prefer-const
    let toast = this.toastCtrl.create({
      message: 'Algo deu errado! Verifique sua internet. =(',
      duration: 4000,
      // tslint:disable-next-line:object-literal-shorthand
      position: position,
      cssClass: 'center'
    });

    toast.present(toast);
  }

  register(user: User) {

    const userEmail = user.email;
    const userSenha = user.senha;
    const userNome = user.nome;

    // tslint:disable-next-line:no-empty
    if (userSenha === undefined || userSenha === '') {

    } else {
      this.tamanhosenha = userSenha.length;
      console.log(this.tamanhosenha);

    }
      
    console.log(userEmail, 'USEREMAIL');
    if (userNome === undefined  || userNome === '' ||
        userEmail === undefined || userEmail === '' ||
          userSenha === undefined || userSenha === '' || this.tamanhosenha <= 2
          ) {
          
      if (userNome === undefined || userNome === '') {
        console.log('nome');
        if (this.error === '') {
          this.error = 'Necessário digitar o seu nome.';
        }
              
      }else {
        this.error = '';
      }

      if (userEmail === undefined || userEmail === '') {
        console.log('email');
        if (this.error === '') {
          this.error = 'Necessário digitar o email.';
        }
      } else {
        this.error = '';
      }

      if (userSenha === undefined || userSenha === '') {
        console.log('senha');
        if (this.error === '') {
          this.error = 'Nessário digitar a senha. ';
        }
      } else {
            
        if (this.tamanhosenha <= 2) {
          if (this.error === '') {
            this.error = 'Senha de no mínimo 3 caracteres.';
          }

        } else {
          this.error = '';
        }
          
      }

    } else {

      // tslint:disable-next-line:no-var-keyword
      var headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
  
      // tslint:disable-next-line:prefer-const
      let options = new RequestOptions({ headers: headers });
          
      new Promise((resolve, reject) => {
        this.http.post('https://imagine-art.herokuapp.com/user/signup/',JSON.stringify({
          email: user.email,
          password: user.senha,
          name : user.nome,
        }), options)
            .toPromise()
            .then((response) => {
              console.log('API Response : ', response.json());
              console.log('DATA');
              localStorage.setItem('user', JSON.stringify(response));
              resolve(response.json());
              this.showToast('middle');
              
            })
            .catch((error) => {
              console.error('API Error : ', error.status);
              console.error('API Error : ', JSON.stringify(error));
              // this.showToast1('middle');
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
 
    if (this.showPass) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
