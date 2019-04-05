import { Injectable } from '@angular/core';

/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesServiceProvider {

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

















  constructor() {
    console.log('Hello GroceriesServiceProvider Provider');
  }

  getItem(){
    return this.items;
  }

  removeItem(index){
    this.items.splice(index,1); /* splice index , number of item want to remove */

  }

  addItem(item){
    this.items.push(item);
  }

  editItem(item,index){
    this.items[index] = item;
  }

  editQuantity(item,index){
    this.items[index].quantity = item;
  }
}
