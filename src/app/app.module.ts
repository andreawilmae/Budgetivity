import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';



import { MyApp } from './app.component';


import { ExpensesPage } from '../pages/expenses/expenses';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { OcrPage } from '../pages/ocr/ocr';
import { Camera } from '@ionic-native/camera';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


var config = {
  apiKey: "AIzaSyAgZdidl5JIB_m_lHrtCEUsdKGW4izK7Xk",
  authDomain: "budgetivity-59526.firebaseapp.com",
  databaseURL: "https://budgetivity-59526.firebaseio.com",
  projectId: "budgetivity-59526",
  storageBucket: "budgetivity-59526.appspot.com",
  messagingSenderId: "641610719969"
};







@NgModule({
  declarations: [
    MyApp,
    ExpensesPage,
    ContactPage,
    HomePage,
    TabsPage,
    OcrPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExpensesPage,
    ContactPage,
    HomePage,
    TabsPage,
    OcrPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera

  ]
})
export class AppModule {}
