import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ViewFoodExpensesModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-food-expenses-modal',
  templateUrl: 'view-food-expenses-modal.html',
})
export class ViewFoodExpensesModalPage {
foods=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public afd:AngularFireDatabase) {
    this.getDataFromFirebase();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewFoodExpensesModalPage');
  }

  closeView(){
    this.viewCtrl.dismiss();
  }

  getDataFromFirebase(){
    this.afd.list('expenses/foodCategory/').snapshotChanges().subscribe(
      snapshots => {
        console.log((snapshots))
        this.foods = snapshots.map(snapshot => ({id:snapshot.key,...snapshot.payload.val() }))
      })
  }
}
