import { CameraProvider } from '../../providers/util/camera.provider';
import { Component } from '@angular/core';
import {
  NavController,
  Platform,
  ActionSheetController,
  LoadingController,
  IonicPage } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfilePage {

  placeholder = 'assets/img/avatar/girl-avatar.png';
  chosenPicture: any;

  constructor(
    public navCtrl: NavController,
    public actionsheetCtrl: ActionSheetController,
    public cameraProvider: CameraProvider,
    public platform: Platform,
    public loadingCtrl: LoadingController
  ) {

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

  user = {
    name: 'Paula Bolliger',
    profileImage: 'assets/img/avatar/girl-avatar.png',
    coverImage: 'assets/img/background/background-5.jpg',
    city: 'Votuporanga',
    state: 'São Paulo',
    phone: '',
    likes: 456,
    posts: 35
  };

}
