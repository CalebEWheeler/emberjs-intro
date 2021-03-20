import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  //original default values to pass from controller to view
  // subtotal = 0;
  // tax = 0;
  // total = 0;
  @service('shopping-cart') cart;

  //create getters for each model property
  get subtotal() {
    return this.cart.itemList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }

  get tax() {
    return 0.09 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  @action 
  updateItemCount(item, event) {
    const count = event.target.value;
    if ( count >= 0 ) {
      item.count = count;
    } else {
      item.count = 0;
    }
  }
}
