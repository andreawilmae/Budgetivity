import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFoodExpenseModalPage } from './add-food-expense-modal';

@NgModule({
  declarations: [
    AddFoodExpenseModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFoodExpenseModalPage),
  ],
})
export class AddFoodExpenseModalPageModule {}
