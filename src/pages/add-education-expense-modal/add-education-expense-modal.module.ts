import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEducationExpenseModalPage } from './add-education-expense-modal';

@NgModule({
  declarations: [
    AddEducationExpenseModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEducationExpenseModalPage),
  ],
})
export class AddEducationExpenseModalPageModule {}
