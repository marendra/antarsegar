import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel :
    function (){
      this.get("session").close()
      this.transitionTo("index");
    }

});
