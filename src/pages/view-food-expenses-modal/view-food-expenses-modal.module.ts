import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewFoodExpensesModalPage } from './view-food-expenses-modal';

@NgModule({
  declarations: [
    ViewFoodExpensesModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewFoodExpensesModalPage),
  ],
})
export class ViewFoodExpensesModalPageModule {}
