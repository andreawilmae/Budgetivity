import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditMoneyModalPage } from './edit-money-modal';

@NgModule({
  declarations: [
    EditMoneyModalPage,
  ],
  imports: [
    IonicPageModule.forChild(EditMoneyModalPage),
  ],
})
export class EditMoneyModalPageModule {}
