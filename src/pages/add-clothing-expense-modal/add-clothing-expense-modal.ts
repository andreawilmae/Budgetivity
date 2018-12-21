import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the AddClothingExpenseModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-clothing-expense-modal',
  templateUrl: 'add-clothing-expense-modal.html',
})
export class AddClothingExpenseModalPage {
  date;
  productName;
  quantity;
  itemSize;
  merchant;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afd:AngularFireDatabase, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddClothingExpenseModalPage');
  }

  saveClothingExpense(){
    const clothing = {date:this.date, productName:this.productName, quantity:this.quantity, size:this.itemSize, merchant:this.merchant};
     this.afd.list('expenses/clothingCategory').push(clothing);
     this.viewCtrl.dismiss();
   }

   cancelExpense(){
    this.viewCtrl.dismiss();
  }
}
