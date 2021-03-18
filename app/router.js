import EmberRouter from '@ember/routing/router';
import config from 'emberjs-tutorial/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('pokemon', function() {
    this.route('mudkip');
  });
  this.route('item', {path: '/item/:item_id'});
});
