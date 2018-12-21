import { Component } from '@angular/core';
import { NavController, ModalController, ActionSheetController } from 'ionic-angular'; 
import { Camera, PictureSourceType } from '@ionic-native/camera';
import * as Tesseract from 'tesseract.js'

@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html'
})
export class ExpensesPage {
  selectedImage: string;
  lines: string;
  
  constructor(public navCtrl: NavController, public modal: ModalController, private camera: Camera, private actionSheetCtrl: ActionSheetController) {

  }
  

  addFoodExpense(){
    const myModal = this.modal.create('AddFoodExpenseModalPage');
    myModal.present();
  }

  addClothingExpense(){
    const clothing = this.modal.create('AddClothingExpenseModalPage');
    clothing.present();
  }

  addTransportationExpense(){
    const transpo = this.modal.create('AddTransportationExpenseModalPage');
    transpo.present();
  }

  addHealthExpense(){
    const health = this.modal.create('AddHealthExpenseModalPage');
    health.present();
  }
  
  addEducationExpense(){
    const educ = this.modal.create('AddEducationExpenseModalPage');
    educ.present();
  }

  addDonationExpense(){
    const donate = this.modal.create('AddDonationExpenseModalPage');
    donate.present();
  }

  viewFoodExpenses(){
    const viewFood = this.modal.create('ViewFoodExpensesModalPage');
    viewFood.present();
  }

  selectImage(){
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Use Library',
          handler: () => {
            this.getImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }, {
          text: 'Use Camera',
          handler: () => {
            this.getImage(this.camera.PictureSourceType.CAMERA);
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  getImage(sourceType: PictureSourceType){
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then((imageData) => {
      this.selectedImage = `data:image/jpeg;base64,${imageData}`;
    });
    const myModal = this.modal.create('OcrPage');
    myModal.present();
  }

  tesseractConfig = {
    lang: 'eng',
    tessedit_pageseg_mode: '6',
    tessedit_char_whitelist: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#()@/*-.,'
  };
  recognizeImage() {
    Tesseract.recognize(this.selectedImage, this.tesseractConfig)
    .then(result => {
      this.lines = result.text;
      this.lines.split(/\r?\n/).forEach(line => {
        let match;
        if (match = line.match(/[A-Z\s.,]+/)){ 
          this.lines.replace(match, '$1')
        }
        // return this.lines;
      })
    })
    // \d{1,2}[\w\s]+[(0-9)+,.?(0-9)*]+ 1 ORANGE 4.68
  }
}
