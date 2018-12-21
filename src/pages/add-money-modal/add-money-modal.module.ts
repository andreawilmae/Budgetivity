import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMoneyModalPage } from './add-money-modal';

@NgModule({
  declarations: [
    AddMoneyModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMoneyModalPage),
  ],
})
export class AddMoneyModalPageModule {}
