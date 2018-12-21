import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the AddHealthExpenseModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-health-expense-modal',
  templateUrl: 'add-health-expense-modal.html',
})
export class AddHealthExpenseModalPage {
date;
quantity;
medicineName;
hospitalName;
amountPaid;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afd: AngularFireDatabase, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHealthExpenseModalPage');
  }


  saveHealthExpense(){
    const health = {date:this.date, medicineName:this.medicineName, quantity:this.quantity, hospitalName:this.hospitalName, amountPaid:this.amountPaid}
    this.afd.list('expenses/healthCategory').push(health);
    this.viewCtrl.dismiss();
  }

  cancelExpense(){
    this.viewCtrl.dismiss();
  }
}
