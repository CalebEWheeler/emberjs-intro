import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TrendingController extends Controller {

  selectValues = ["G", "PG", "PG-13", "R"];

  @tracked selectRating = 'G';

  @tracked number = 0;

  @action
  increment() {
    this.number = this.number + 1;
  }

  @action
  decrement() {
    if ( this.number !== 0 ) this.number = this.number - 1;
    else this.number = 0;
  }

}
