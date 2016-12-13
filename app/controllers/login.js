import Ember from 'ember';

export default Ember.Controller.extend({
  user :Ember.inject.service(),
  flashMessages:Ember.inject.service(),
  actions : {
    login (){
 const email = this.get("email") ||"";
 const password = this.get("password")||"";
 const me = this;
if (email =="" && password==""){
  this.get("flashMessages").danger("Email and password must be filled in");
  return;
}
 this.get("session").open("firebase",{
  provider:"password",
  email:email,
  password:password
 }).then(function (data){

   const uid = data.currentUser.uid;

   me.get("store").findRecord('user',uid).then((data)=>{

     const privilege = data.get("privilege");
     switch (privilege){
       case "admin":
         me.set("user.admin",true);
         me.transitionToRoute("adminPage");
         return;
       case "buyer":
         me.set("user.buyer",true);
         me.transitionToRoute("buyerPage");
         return;
     }
   })

   me.set("email","");
   me.set("password","");


 }).catch(function (error){
   console.log(error);
   me.get("flashMessages").danger(error);
   me.set("password","");
 })
}
  }

});
