import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  title : "Grocery List";
  
  items = [
    {
      name: "Milk",
      quantity: 1
    },
    {
      name: "Steak",
      quantity: 3
    },
    {
      name: "Banana",
      quantity: 2
    },
    {
      name: "Salt",
      quantity: 5
    },

  ];
  

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  removeItem(item,index){
    console.log("Removing Item - ",item, index);
    const toast = this.toastCtrl.create({
      message: item.name + " " +  "was removed successfully",
      duration: 3000
    });
    toast.present();

    this.items.splice(index,1); /* splice index , number of item want to remove */
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
            this.items.push(item);
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
            console.log('Saved clicked', this.items[index]);
            this.items[index] = item;
          }
        }
      ]
      
    });
    prompt.present();
    
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
      handler: data => {
        console.log('Saved clicked Item', data);
        this.items[index].quantity = data;
        
      }
    });
    alert.present();
    
    
  }

}



