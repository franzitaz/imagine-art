import { CameraProvider } from '../../providers/util/camera.provider';
import { Component } from '@angular/core';
import {
  NavController,
  Platform,
  ActionSheetController,
  LoadingController,
  IonicPage } from 'ionic-angular';

import { AddWorkPage } from '../add-work/add-work';
import { EditProfilePage } from '../edit-profile/edit-profile';

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

  placeholder = 'assets/img/avatar/girl-avatar.png';
  chosenPicture: any;

  produtos = [];
  user = [];
  // tslint:disable-next-line:max-line-length
  userConfirm = false; // Esta variavel vai verificar se o usuario eh o mesmo do perfil, para liberar os botoes de editar

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
    this.getProfileInformation();
  }

  getProfileInformation():void {

    this.localstorage.getProfileID().then((profileID) => {
      
      // tslint:disable-next-line:no-var-keyword
      var headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
        
      // tslint:disable-next-line:prefer-const
      let options = new RequestOptions({ headers: headers });
      
      console.log(profileID);

      // tslint:disable-next-line:prefer-const
      let data = JSON.stringify({
        userID: profileID
      });
            
      new Promise((resolve, reject) => {
        this.http.post('https://imagine-art.herokuapp.com/user/getUserProfile/',data, options)
              .toPromise()
              .then((response) => {

                this.localstorage.getUser('').then((userLoggedID) => {
                   
                  console.log(profileID);
                  console.log(userLoggedID);

                  if (profileID === userLoggedID._id) {
                    this.userConfirm = true;
                  }

                });
                    
                this.produtos = response.json().product;
                this.user = response.json().user;

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

  goToAddWork():void {  
    this.navCtrl.push(AddWorkPage);
  }

  /*user = {
    name: 'Paula Bolliger',
    profileImage: 'assets/img/avatar/girl-avatar.png',
    coverImage: 'assets/img/background/background-5.jpg',
    city: 'Votuporanga',
    state: 'São Paulo',
    phone: '17 3422-6096',
    likes: 456,
    posts: 35
  };

  posts = [
    {
      postImageUrl: 'assets/img/background/background-2.jpg',
      title: 'Título do Produto',
      text: `I believe in being strong when everything seems to be going wrong.
             I believe that happy girls are the prettiest girls.
             I believe that tomorrow is another day and I believe in miracles.`,
      date: 'November 5, 2016',
      likes: 12,
      comments: 4
    }
  ];*/

}
