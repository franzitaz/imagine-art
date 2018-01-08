import { FormControl, FormBuilder } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Content, LoadingController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable, } from 'angularfire2/database';

import { Localstorage } from '../../../providers/localstorage';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

// tslint:disable-next-line:no-duplicate-imports
import { ChangeDetectorRef, ChangeDetectionStrategy  } from '@angular/core';
// import { FormGroup } from '@angular/forms/src/model';

@IonicPage()
@Component({

  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

  lista = [];
  mensagem: any;
  messages = [];
  userID;
  data;
  chatID = [];
  chatNome;

  public messageForm: any;

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController,private http: Http,public cdr:ChangeDetectorRef,
    public localstorage: Localstorage, public loadingCtrl: LoadingController,public formBuilder: FormBuilder) {
    
    this.localstorage = localstorage;

    this.localstorage.getProductor().then((produtorInformation) => {

      this.localstorage.getChatID().then((chatCallback) => {

        if (produtorInformation === null || produtorInformation === undefined || !produtorInformation) {

          this.getMessages();

        }else {
          
          this.chatPeloProduto(produtorInformation);
          
        }

      });

    });

    this.mensagem = '';
    this.scrollToBottom();

  }

  onPageWillLeave() {
    // enable the root left menu when leaving the tutorial page
    // console.log('SAINDO DA PAGINA');
  }

  chatPeloProduto(produtorInformation) {

    const loading = this.loadingCtrl.create();
    loading.present();

    const product = produtorInformation;

    const messageText = ('Olá, gostaria de conversar sobre o produto: ' + produtorInformation.productTitle);
    
    this.localstorage.getUser('').then((userInformation) => {
      
      this.userID = userInformation._id;

      // tslint:disable-next-line:no-var-keyword
      var headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');

      // tslint:disable-next-line:object-literal-shorthand
      let options = new RequestOptions({ headers: headers });

      // tslint:disable-next-line:prefer-const
      this.data = JSON.stringify({
        chatID: '',
        senderID: userInformation._id,
        senderName: userInformation.name,
        personTwo: product.productorID,
        personTwoName: product.productorName,
        text: messageText

      });

      new Promise((resolve, reject) => {
        this.http.post('https://imagine-art.herokuapp.com/message/newMessage/',this.data, options)
        .toPromise()
        .then((response) => {

          this.messages = response.json().Message;
          const chatInfo = { 
            chatID : response.json().chat.chat._id, 
            personTwoName: response.json().chat.chat.personTwoName, 
            personTwo: response.json().chat.chat.personTwo, 
            personOneName: response.json().chat.chat.personOneName, 
            personOne: response.json().chat.chat.personOne
          };

          if (chatInfo.personTwoName === userInformation) {
            this.chatNome = chatInfo.personOneName;
          } else {
            this.chatNome = chatInfo.personTwoName;
          }

          this.localstorage.setChatID('');
          this.localstorage.setChatID(chatInfo);
          
          this.localstorage.setProductor('');
          this.cdr.markForCheck();
          this.scrollToBottom();

          loading.dismiss();  
          resolve(response.json());
          
        })
        .catch((error) => {
          console.error('API Error : ', error.status);
          console.error('API Error : ', JSON.stringify(error));
          reject(error.json());
        });
      });

    });
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }

  sendMessage(message) {

    this.localstorage.getChatID().then((chatCallback) => {
      
      this.localstorage.getUser('').then((userInformation) => {

        this.userID = userInformation._id;

        // tslint:disable-next-line:no-var-keyword
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        // tslint:disable-next-line:object-literal-shorthand
        let options = new RequestOptions({ headers: headers });

        // tslint:disable-next-line:prefer-const
        this.data = JSON.stringify({
          chatID: chatCallback.chatID,
          senderID: userInformation._id,
          senderName: userInformation.name,
          text: message
        });

        new Promise((resolve, reject) => {
          this.http.post('https://imagine-art.herokuapp.com/message/newMessage/',this.data, options)
          .toPromise()
          .then((response) => {

            const setMessage = {
              chatID: chatCallback.chatID,
              senderID: userInformation._id,
              senderName: userInformation.name,
              text: message
            };

            console.log(response.json());
            this.messages.push(setMessage);
            // this.localstorage.setChatID('');
            this.mensagem = '';
            this.cdr.markForCheck();
            this.scrollToBottom();
            resolve(response.json());
            
          })
          .catch((error) => {
            console.error('API Error : ', error.status);
            console.error('API Error : ', JSON.stringify(error));
            reject(error.json());
          });
        });

      });

    });

  }

  getMessages() {

    const loading = this.loadingCtrl.create();
    loading.present();

    this.localstorage.getUser('').then((userInformation) => {

      this.userID = userInformation._id;

      this.localstorage.getChatID().then((chatIDCallback) => {

        if (chatIDCallback.title === userInformation) {
          this.chatNome = 'Você mesmo';
        } else {
          this.chatNome = chatIDCallback.title;
        }

      // tslint:disable-next-line:no-var-keyword
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

      // tslint:disable-next-line:object-literal-shorthand
        let options = new RequestOptions({ headers: headers });

      // tslint:disable-next-line:prefer-const
        let data = JSON.stringify({
          chatID: chatIDCallback.chatID
        });

        new Promise((resolve, reject) => {
          this.http.post('https://imagine-art.herokuapp.com/message/getAllMessagesByMember/',data, options)
        .toPromise()
        .then((response) => {
          
          this.messages = response.json().Message;
          this.scrollToBottom();

          loading.dismiss();  
          resolve(response.json());
          
        })
        .catch((error) => {
          console.error('API Error : ', error.status);
          console.error('API Error : ', JSON.stringify(error));
          reject(error.json());
        });
        });

      });

    });
     
  }

}
