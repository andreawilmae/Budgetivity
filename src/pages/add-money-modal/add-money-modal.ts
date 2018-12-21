import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the AddMoneyModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-money-modal',
  templateUrl: 'add-money-modal.html',
})
export class AddMoneyModalPage {
  amount;
  type;
  items;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, public viewCtrl: ViewController, public afd: AngularFireDatabase) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMoneyModalPage');
  }
  
  cancelMoney(){
    this.viewCtrl.dismiss();
  }

 saveMoney(){
  const money = {amount:this.amount, type:this.type};
   this.afd.list('income').push(money);
   this.viewCtrl.dismiss();
  
 }


 

}
