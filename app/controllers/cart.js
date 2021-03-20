import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class CartController extends Controller {
  //original default values to pass from controller to view
  // subtotal = 0;
  // tax = 0;
  // total = 0;
  @service('shopping-cart') cart;

  //create getters for each model property
  get subtotal() {
    return this.model.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }

  get tax() {
    return 0.09 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }
}
