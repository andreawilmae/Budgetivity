import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  // Doughnut
public doughnutChartLabels:string[] = ['Food', 'Clothing', 'Transportation', 'Utilities', 'Health', 'bills'];
public doughnutChartData:number[] = [350, 450, 100, 100, 400, 500];
public doughnutChartType:string = 'doughnut';

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}
}
