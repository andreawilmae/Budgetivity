import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the BudgetAllocationModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-budget-allocation-modal',
  templateUrl: 'budget-allocation-modal.html',
})
export class BudgetAllocationModalPage {
category;
percentAllocation;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController,public afd: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BudgetAllocationModalPage');
  }

  
  cancelBudgetAllocation(){
    this.viewCtrl.dismiss();
  }

  saveBudgetAllocation(){
    const allocatedBudget = {category:this.category, percentAllocation:this.percentAllocation};
    this.afd.list('budgetAllocation').push(allocatedBudget);
    this.viewCtrl.dismiss();
  }

}
