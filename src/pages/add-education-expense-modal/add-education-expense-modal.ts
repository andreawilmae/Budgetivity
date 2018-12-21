import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the AddEducationExpenseModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-education-expense-modal',
  templateUrl: 'add-education-expense-modal.html',
})
export class AddEducationExpenseModalPage {
date;
schoolActName;
amountPaid;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afd: AngularFireDatabase, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEducationExpenseModalPage');
  }

  saveEducationExpense(){
    const education = { date:this.date, schoolActName:this.schoolActName, amountPaid:this.amountPaid}
    this.afd.list('expenses/educationCategory').push(education);
    this.viewCtrl.dismiss();
  }

  cancelExpense(){
    this.viewCtrl.dismiss();
  }
}
