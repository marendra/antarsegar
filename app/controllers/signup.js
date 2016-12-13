import Ember from 'ember';

export default Ember.Controller.extend({
  firebaseApp:Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  actions:{
    signup (){
      const me = this;
      const auth = this.get('firebaseApp').auth();
      const email = this.get("email") ||'';
      const password = this.get("password") ||'';
      const rePassword = this.get("rePassword")||'';

      if (email===""){
        Ember.get(this, 'flashMessages').danger("No Email provided");
        return;
      }
      auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      this.get("flashMessages").danger(error);

      }).then( (userResponse)=>{

        const user = this.store.createRecord('user', {
          id: userResponse.uid,
          email: userResponse.email,
          name:name,
          privilege:"buyer"
        });

        this.set("email","");
        this.set("password","");
        this.set("rePassword","");
        user.save().then(function(){
          me.transitionToRoute("logout");
        })


        }
      )

    }

  }
});
