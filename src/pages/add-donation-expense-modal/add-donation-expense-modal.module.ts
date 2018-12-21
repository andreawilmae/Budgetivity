import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDonationExpenseModalPage } from './add-donation-expense-modal';

@NgModule({
  declarations: [
    AddDonationExpenseModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDonationExpenseModalPage),
  ],
})
export class AddDonationExpenseModalPageModule {}
