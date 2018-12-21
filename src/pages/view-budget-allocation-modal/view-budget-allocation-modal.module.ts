import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewBudgetAllocationModalPage } from './view-budget-allocation-modal';

@NgModule({
  declarations: [
    ViewBudgetAllocationModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewBudgetAllocationModalPage),
  ],
})
export class ViewBudgetAllocationModalPageModule {}
