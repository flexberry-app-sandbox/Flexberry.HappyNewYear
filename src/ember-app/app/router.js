import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-happy-new-year-gift-l');
  this.route('i-i-s-happy-new-year-gift-e',
  { path: 'i-i-s-happy-new-year-gift-e/:id' });
  this.route('i-i-s-happy-new-year-gift-e.new',
  { path: 'i-i-s-happy-new-year-gift-e/new' });
  this.route('i-i-s-happy-new-year-gift-type-l');
  this.route('i-i-s-happy-new-year-gift-type-e',
  { path: 'i-i-s-happy-new-year-gift-type-e/:id' });
  this.route('i-i-s-happy-new-year-gift-type-e.new',
  { path: 'i-i-s-happy-new-year-gift-type-e/new' });
});

export default Router;
