import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  title : "Grocery List";
  

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController,public dataService: GroceriesServiceProvider) {

  }

  removeItem(item,index){
    console.log("Removing Item - ",item, index);
    const toast = this.toastCtrl.create({
      message: item.name + " " +  "was removed successfully",
      duration: 3000
    });
    toast.present();
    this.dataService.removeItem(index);
  }

  addItem(){
    console.log("Adding Item");
    this.showAddItemPrompt();
    
  }


  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Groceries Cart',
      message: "Please enter the item to your cart",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.dataService.addItem(item);
          }
        }
      ]
      
    });
    prompt.present();
    
  }

  showEditItemPrompt(item,index) {
    const prompt = this.alertCtrl.create({
      title: 'Groceries Cart',
      message: "Please enter the item to your cart",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',   
          handler: item => {
            console.log('Saved clicked', item);
            this.dataService.editItem(item,index);
          }
        }
      ]
      
    });
    prompt.present();
    
  }

  loaditem(){
    return this.dataService.getItem();
  }

  showRadio(item,index) {
    let alert = this.alertCtrl.create();
    alert.setTitle(item.name);
    const quantities = ['1', '2', '3', '4','5','6','7','8','9','10'];

    quantities.forEach(quantity => {
        alert.addInput({
            type: 'radio',
            label: quantity,
            value: quantity.toLowerCase(),
            checked: false
        });
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: item => {
        console.log('Saved clicked Item', item);
        this.dataService.editQuantity(item,index);
        
      }
    });
    alert.present();
    
    
  }

}



