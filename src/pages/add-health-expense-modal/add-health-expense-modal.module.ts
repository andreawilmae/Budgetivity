import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddHealthExpenseModalPage } from './add-health-expense-modal';

@NgModule({
  declarations: [
    AddHealthExpenseModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddHealthExpenseModalPage),
  ],
})
export class AddHealthExpenseModalPageModule {}
