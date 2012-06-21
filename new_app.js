//APPLICATION
var MyApp = Ember.Application.create();


//MODEL
MyApp.Name_list = Ember.Object.create({
  first_name: '' ,
  last_name: '' ,
  full_name: Ember.computed(function(){
  return this.get('first_name')+" "+this.get('last_name');
}).property('first_name','last_name')
});

//CONTROLLERS
MyApp.ArrayController = Ember.ArrayController.create({//controller starts
 content : [],
 addElement: function(){//add element starts
   var user_name = Em.Object.create({//username starts
    new_name: MyApp.Name_list.get('full_name')
   });//username ends
   var my = this; 
   if(user_name.get('new_name')==' ')
    alert("Name can't be empty !")
   else {//else starts
      $.ajax({//ajax starts
      type: "POST",
      url: "http://localhost:1338/upload",
      data: user_name.get("new_name")
      }).done(function() {//ajax ends and done starts
       my.pushObject(user_name);    
      }).fail(function(){//done ends and fail starts
       MyApp.ArrayController2.enterFailedReq(user_name);  
   });//fail ends
   MyApp.Name_list.set('first_name',"");
   MyApp.Name_list.set('last_name',"");  
   }//else ends
 }//add element ends
});//controller ends

MyApp.ArrayController2 = Ember.ArrayController.create({
content : [],
enterFailedReq : function(f_name){
this.pushObject(f_name);
}
});

//VIEWS
MyApp.CreatefnView = Em.TextField.extend({
 insertNewline: function(){
  MyApp.ArrayController.addElement();
 }
});
