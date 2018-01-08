import { Component } from '@angular/core';
import { App, NavController, IonicPage, LoadingController } from 'ionic-angular';

import { MessagesPage } from '../chat/messages/messages';

import { Localstorage } from '../../providers/localstorage';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  templateUrl: 'chats.html',
})

export class ChatsPage {

  userID;
  chats = [];

  constructor(public navCtrl: NavController,  private http: Http,
              public localstorage:Localstorage,
              public loadingCtrl: LoadingController) {

   // window.location.reload();
    this.localstorage = localstorage;
    this.getChat();

  }

  reload() {
    setTimeout(() => {
      this.navCtrl.setRoot(ChatsPage);
    }, 100);
  }

  getChat() {
    const loading = this.loadingCtrl.create();
    loading.present();

    this.localstorage.getUser('').then(user => {
      
      this.userID = user._id;

      // tslint:disable-next-line:no-var-keyword
      var headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
  
      // tslint:disable-next-line:object-literal-shorthand
      let options = new RequestOptions({ headers: headers });

      // tslint:disable-next-line:prefer-const
      let data = JSON.stringify({
        personSender: this.userID
      });

      new Promise((resolve, reject) => {
        this.http.post('https://imagine-art.herokuapp.com/message/getChat/',data, options)
        .toPromise()
        .then((response) => {

          this.chats = response.json().chat;
          loading.dismiss();          
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

  viewMessages(chat) {
    this.localstorage.setChatID(chat);
    this.navCtrl.push(MessagesPage, { chatId: chat._id });
  }
}
