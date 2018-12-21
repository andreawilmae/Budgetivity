import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the AddTransportationExpenseModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-transportation-expense-modal',
  templateUrl: 'add-transportation-expense-modal.html',
})
export class AddTransportationExpenseModalPage {
date;
farePrice;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afd:AngularFireDatabase, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTransportationExpenseModalPage');
  }

  saveTransportationExpense(){
    const transportation = {date:this.date, farePrice:this.farePrice}
    this.afd.list('expenses/TransportationCategory').push(transportation);
    this.viewCtrl.dismiss();
  }

  cancelExpense(){
    this.viewCtrl.dismiss();
  }
}
