import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTransportationExpenseModalPage } from './add-transportation-expense-modal';

@NgModule({
  declarations: [
    AddTransportationExpenseModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTransportationExpenseModalPage),
  ],
})
export class AddTransportationExpenseModalPageModule {}
