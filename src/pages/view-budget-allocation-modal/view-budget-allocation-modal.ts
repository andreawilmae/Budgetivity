import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the ViewBudgetAllocationModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-budget-allocation-modal',
  templateUrl: 'view-budget-allocation-modal.html',
})
export class ViewBudgetAllocationModalPage {
percents= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public afd:AngularFireDatabase, public viewCtrl:ViewController) {
    this.getDataFromFirebase();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewBudgetAllocationModalPage');
  }

  getDataFromFirebase(){
    this.afd.list('budgetAllocation/').snapshotChanges().subscribe(
      snapshots => {
        console.log((snapshots))
        this.percents = snapshots.map(snapshot => ({id:snapshot.key,...snapshot.payload.val() }))
      })
  }

  closeViewBudget(){
    this.viewCtrl.dismiss();
  }
}
