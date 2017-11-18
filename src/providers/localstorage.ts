import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage }  from '@ionic/storage';

/*
  Generated class for the Localstorage provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Localstorage {

  constructor(private storage:Storage) {

  }

    // store the email address
  setUser(user) {
    this.storage.set('user',user);
  }

  getUser(nome):any {
    	return this.storage.get('user').then(user => {
      return user;
    	});
  }

  setCategoria(categoria: string) {
    this.storage.set('categoria',categoria);
  }

  getCategoria():any {
    	return this.storage.get('categoria').then(categoria => {
      return categoria;
    	});
  }

  setProfileID(profileID: string) {
    this.storage.set('profileID',profileID);
  }

  getProfileID():any {
        
    	return this.storage.get('profileID').then(profileID => {
            
      return profileID;
    	});
  }

  setSearch(search) {
    this.storage.set('search',search);
  }

  getSearch():any {
    	return this.storage.get('search').then(search => {
      return search;
    	});
  }

    // clear the whole local storage
  clearStorage() {
    	this.storage.clear().then(() => {
      console.log('all keys are cleared');
    	});
  }

}
