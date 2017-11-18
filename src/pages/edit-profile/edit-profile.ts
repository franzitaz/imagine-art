import { CameraProvider } from '../../providers/util/camera.provider';
import { Component } from '@angular/core';
// tslint:disable-next-line:no-duplicate-imports
import { ChangeDetectorRef, ChangeDetectionStrategy  } from '@angular/core';
import {
  NavController,
  Platform,
  ActionSheetController,
  LoadingController,
  IonicPage } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';

import { User } from '../../models/user/user.interface';
import { Localstorage } from '../../providers/localstorage';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfilePage {

  placeholder = 'assets/img/avatar/girl-avatar.png';
  chosenPicture: any;
  userObj = [{ name: 'a' }];
  
  teste;

  user = {} as User;

  constructor(
    public navCtrl: NavController,
    public actionsheetCtrl: ActionSheetController,
    public cameraProvider: CameraProvider,
    public platform: Platform,
    public loadingCtrl: LoadingController,
    private http: Http,
    public localstorage:Localstorage,
    public cdr:ChangeDetectorRef
  ) {
    
    this.localstorage = localstorage;
    
  }

  ionViewWillEnter() {

    this.getProfileInfo();

  }

  updateProfile(userInformation) {

    this.localstorage.getUser('').then((userLocalStorage) => {
      
      console.log('getProfileInfo', userLocalStorage);
      
      // tslint:disable-next-line:no-var-keyword
      var headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
        
      // tslint:disable-next-line:object-literal-shorthand
      let options = new RequestOptions({ headers: headers });
      
      // tslint:disable-next-line:prefer-const
      let data = JSON.stringify({
        userID: userLocalStorage._id,
        name: this.user.nome
      });
      
      console.log('CONSOLE DATA', data);
      
      new Promise((resolve, reject) => {
        this.http.post('https://imagine-art.herokuapp.com/user/updateProfile/',data, options)
              .toPromise()
              .then((response) => {
      
                console.log('CONSOLE LOG DA VARIAVEL response.json()',response.json());
      
                if (response.json().code === 200) {
                  resolve(response.json());
                }
      
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

  getProfileInfo():any {

    this.localstorage.getUser('').then((user) => {

      console.log('getProfileInfo', user);

      // tslint:disable-next-line:no-var-keyword
      var headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
  
      // tslint:disable-next-line:object-literal-shorthand
      let options = new RequestOptions({ headers: headers });

      // tslint:disable-next-line:prefer-const
      let data = JSON.stringify({
        userID: user._id
      });

      console.log('CONSOLE DATA', data);

      new Promise((resolve, reject) => {
        this.http.post('https://imagine-art.herokuapp.com/user/getUpdateProfile/',data, options)
        .toPromise()
        .then((response) => {

          console.log('CONSOLE LOG DA VARIAVEL response.json()',response.json());

          if (response.json().code === 200) {

            this.userObj = response.json().user;
            console.log('CONSOLE LOG DA VARIAVEL response.json().user',response.json().user);
            console.log('CONSOLE LOG DA VARIAVEL USER',this.userObj);
            this.teste = response.json().user.name;
            resolve(response.json());
            this.cdr.markForCheck();
            return response.json().user;
          }

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

  changePicture() {
    
    const actionsheet = this.actionsheetCtrl.create({
      title: 'upload picture',
      buttons: [
        {
          text: 'camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.getPicture();
          }
        },
        {
          text: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'destructive',
          handler: () => {
            console.log('the user has cancelled the interaction.');
          }
        }
      ]
    });
    return actionsheet.present();
  }
    
  takePicture() {
    const loading = this.loadingCtrl.create();
    
    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }
    
  getPicture() {
    const loading = this.loadingCtrl.create();
    
    loading.present();
    return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

}
