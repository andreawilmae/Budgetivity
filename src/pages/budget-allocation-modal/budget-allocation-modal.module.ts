import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BudgetAllocationModalPage } from './budget-allocation-modal';

@NgModule({
  declarations: [
    BudgetAllocationModalPage,
  ],
  imports: [
    IonicPageModule.forChild(BudgetAllocationModalPage),
  ],
})
export class BudgetAllocationModalPageModule {}
