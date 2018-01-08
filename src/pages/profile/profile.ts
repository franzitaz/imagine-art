import { CameraProvider } from '../../providers/util/camera.provider';
import { Component } from '@angular/core';
import {
  NavController,
  Platform,
  ActionSheetController,
  LoadingController,
  IonicPage } from 'ionic-angular';

import { EditWorkPage } from '../edit-work/edit-work';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { MessagesPage } from '../../pages/chat/messages/messages';

import { Localstorage } from '../../providers/localstorage';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  chosenPicture: any;

  data = '';
  produtos = [];
  productInformation = [];
  // user = [];
  
  user = [{
    // avatar: 'assets/img/icon/icon-o.png',
    // backgroundimage: 'assets/img/background/wood2.jpg'
    city: 'Cidade',
    state: 'Estado',
    cellphone: '(99) 99999-9999'
  }];

  // tslint:disable-next-line:max-line-length
  userConfirm = false; // Esta variavel vai verificar se o usuario eh o mesmo do perfil, para liberar os botoes de editar
  currentlyUserID;

  placeholder = 'assets/img/icon/icon-o.png';
  placeholder1 = 'assets/img/background/wood2.jpg';  

  constructor(
    public navCtrl: NavController,
    public actionsheetCtrl: ActionSheetController,
    public cameraProvider: CameraProvider,
    public platform: Platform,
    public loadingCtrl: LoadingController,
    private http: Http,
    public localstorage:Localstorage
  ) {
    this.localstorage = localstorage;

    this.localstorage.getProfileID().then((profileID) => {

      if (profileID === null || profileID === '') {

        this.getProfileInformation('');

      } else {

        this.getProfileInformation(profileID);
        this.localstorage.setProfileID('');

      }

    });

  }

  getProfileInformation(profileID):void {
   // console.log('AKIII');

    const loading = this.loadingCtrl.create();
    loading.present();
    
    this.localstorage.getUser('').then((userID) => {
    
     // console.log('profileID:', profileID);
          
          // tslint:disable-next-line:no-var-keyword
      var headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
            
          // tslint:disable-next-line:prefer-const
      let options = new RequestOptions({ headers: headers });
          
      // console.log(profileID);
    
          // tslint:disable-next-line:prefer-const
      if (profileID === null || profileID === '') {
        // console.log('Profile ID está nulo. estamos dentro do if nulo:', userID);
        this.data = JSON.stringify({
          userID: userID._id
        });
      } else {
        // console.log('Profile ID está nao nulo. estamos dentro do if nao nulo:', profileID);
        this.data = JSON.stringify({
          userID: profileID
        });
      }
                
      new Promise((resolve, reject) => {
        this.http.post('https://imagine-art.herokuapp.com/user/getUserProfile/',                     this.data, options)
                  .toPromise()
                  .then((response) => {
    
                    this.localstorage.getUser('').then((userLoggedID) => {
                       
                      // console.log(profileID, '++++++++++++++++');
                      // console.log(userLoggedID._id, '++++++++++++++++');
    
                      if (response.json().user._id === userLoggedID._id) {
                        this.userConfirm = true;
                      }
    
                    });
                        
                    this.produtos = response.json().product;
                    this.user = response.json().user;
    
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
              console.log('Error occurred :', err);
            });
    
  }
    
  getOwnProfileInformation():void {

    const loading = this.loadingCtrl.create();
    loading.present();

    this.localstorage.getProfileID().then((profileID) => {

      // console.log('profileID:', profileID);
      
      // tslint:disable-next-line:no-var-keyword
      var headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
        
      // tslint:disable-next-line:prefer-const
      let options = new RequestOptions({ headers: headers });
      
      // console.log(profileID);

      // tslint:disable-next-line:prefer-const
      let data = JSON.stringify({
        userID: profileID
      });
            
      new Promise((resolve, reject) => {
        this.http.post('https://imagine-art.herokuapp.com/user/getUserProfile/',data, options)
              .toPromise()
              .then((response) => {

                this.localstorage.getUser('').then((userLoggedID) => {
                   
                  // console.log(profileID, '++++++++++++++++');
                  // console.log(userLoggedID._id, '++++++++++++++++');

                  if (profileID === userLoggedID._id) {
                    this.userConfirm = true;
                  }

                });
                    
                this.produtos = response.json().product;
                this.user = response.json().user;

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
          console.log('Error occurred :', err);
        });

  }

  goToEditProfile():void {  

    this.navCtrl.push(EditProfilePage);
  }

  goToEditWork(productID):void {  
    // console.log('setProductID');
    // console.log(productID);
    // console.log('setProductID');

    this.localstorage.setProductID(productID);
    this.navCtrl.push(EditWorkPage);
  }

  goToMessages(productorCallback) {
    
    const produtor = {
      productorID : productorCallback.productorID,
      productorName: productorCallback. productorName,
      productTitle: productorCallback.productTitle
    }; 
        
    this.localstorage.setChatID('');

    // console.log('-----------------');
    // console.log(produtor);
    // console.log('-----------------');
    
    this.localstorage.setProductor(produtor);
    this.navCtrl.push(MessagesPage);
        
  }
}
