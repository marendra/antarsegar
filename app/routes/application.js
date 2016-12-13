import Ember from 'ember';

export default Ember.Route.extend({
  user:Ember.inject.service(),
  beforeModel: function() {

 this.get('session').fetch().catch(function() {});
 this.get("user").privilege()
  }
});
