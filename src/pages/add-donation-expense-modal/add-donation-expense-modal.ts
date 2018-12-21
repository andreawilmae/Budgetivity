import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the AddDonationExpenseModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-donation-expense-modal',
  templateUrl: 'add-donation-expense-modal.html',
})
export class AddDonationExpenseModalPage {
date;
donationName;
amountDonated;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public afd: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDonationExpenseModalPage');
  }


  saveDonationExpense(){
    const donation = {date:this.date, donationName:this.donationName, amountDonated:this.amountDonated};
    this.afd.list('expenses/donationCategory').push(donation);
    this.viewCtrl.dismiss();
  }

  cancelExpense(){
    this.viewCtrl.dismiss();
  }
}
