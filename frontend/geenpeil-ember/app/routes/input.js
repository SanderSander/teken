import Ember from 'ember';

export default Ember.Route.extend({

  setupController : function(controller,params) {
    controller.set('inputName', params.input);
  }

});
