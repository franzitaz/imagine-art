import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddWorkPage } from './add-work';
import { Localstorage} from '../../providers/localstorage';

@NgModule({
  declarations: [
    AddWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(AddWorkPage),
  ],
})
export class AddWorkPageModule {}
