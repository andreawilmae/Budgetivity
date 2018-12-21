import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';




/**
 * Generated class for the EditMoneyModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-money-modal',
  templateUrl: 'edit-money-modal.html',
})
export class EditMoneyModalPage {
  income;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public afd: AngularFireDatabase, public af: AngularFireModule) {
    this.income = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditMoneyModalPage');
  }

  cancelIncome(){
    this.viewCtrl.dismiss();
  }


  
  updateIncome(){
     this.afd.list('income/').update(this.income.id, {
      amount: this.income.amount,
      type: this.income.type
    });
    this.viewCtrl.dismiss();
    }

  

}
