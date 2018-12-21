import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the AddFoodExpenseModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-food-expense-modal',
  templateUrl: 'add-food-expense-modal.html',
})
export class AddFoodExpenseModalPage {
date;
productName;
quantity;
itemSize;
merchant;
productPrice;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public afd: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFoodExpenseModalPage');
  }

  cancelExpense(){
    this.viewCtrl.dismiss();
  }

  saveFoodExpense(){
    const food = {date:this.date, productName:this.productName, quantity:this.quantity, size:this.itemSize, merchant:this.merchant, productPrice:this.productPrice};
     this.afd.list('expenses/foodCategory').push(food);
     this.viewCtrl.dismiss();
    
   }

}
