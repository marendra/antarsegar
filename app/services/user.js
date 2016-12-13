import Ember from 'ember';

export default Ember.Service.extend({
 firebaseApp:Ember.inject.service(),
  store:Ember.inject.service(),
  buyer:false,
  admin:false,
  seller:false,
  privilege: function (){
   const me = this;
   const auth = this.get('firebaseApp').auth();
    auth.onAuthStateChanged(function(user) {
      if (user) {
        const uid = user.uid

        me.get("store").findRecord('user',uid).then(
          (user)=>{
            const privilege = user.get("privilege");
 console.log(privilege);
            if (privilege=="buyer"){
           me.set("buyer",true);
            }
          }

        )
      } else {
        console.log("user log out");
        me.set("buyer",false);
        me.set("admin",false);
        me.set("seller",false);
      }
    });
  }
});
