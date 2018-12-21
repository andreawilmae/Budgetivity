import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddClothingExpenseModalPage } from './add-clothing-expense-modal';

@NgModule({
  declarations: [
    AddClothingExpenseModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddClothingExpenseModalPage),
  ],
})
export class AddClothingExpenseModalPageModule {}
