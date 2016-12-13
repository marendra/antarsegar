import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('logout');
  this.route('signup');
  this.route('buyerPage');
  this.route('sellerPage');
  this.route('adminPage');
});

export default Router;
