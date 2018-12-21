import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';






@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  splash = true;
  tabBarElement: any;
  incomes= []
  amount;
  money;
 
  constructor(public navCtrl: NavController, public modal: ModalController, public afd: AngularFireDatabase, public af: AngularFireModule, public alertCtrl: AlertController, public viewCtrl: ViewController) {
    this.getDataFromFirebase();
    this.tabBarElement = document.querySelector('.tabbar');
  }


  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 3000);
  }


  getDataFromFirebase(){
    this.afd.list('income/').snapshotChanges().subscribe(
      snapshots => {
        console.log((snapshots))
        this.incomes = snapshots.map(snapshot => ({id:snapshot.key,...snapshot.payload.val() }))
      })
  }

    
  AddMoney(){
    const addMoney = this.modal.create('AddMoneyModalPage');
    addMoney.present();
  }

  BudgetAllocation(){
    const allocateBudget = this.modal.create('BudgetAllocationModalPage');
    allocateBudget.present();
  }


  viewBudgetAllocation(){
    const viewAllocatedBudget = this.modal.create('ViewBudgetAllocationModalPage');
    viewAllocatedBudget.present();
  }


 editIncome(income){
   const newIncome = this.modal.create('EditMoneyModalPage',income);
   newIncome.present();
 }

 deleteIncome(income) {
   const confirm = this.alertCtrl.create({
    title: 'Delete Income',
    message: 'Are you sure you want to delete this income?',
    buttons: [
      {
        text: 'yes',
        handler: () => {
          this.afd.list('/income').remove(income.id);
        }
      },
      {
        text: 'no',
        handler: () => {
        }
      }
    ]
  });
  confirm.present();
  }



 
    

}
  

  
  



  

