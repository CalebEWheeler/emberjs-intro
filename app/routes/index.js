import Route from '@ember/routing/route';
import { products } from '../data/products';

export default class IndexRoute extends Route {
  //use model hook to pass data down to the template
  model() {
    return products;
  }
}
