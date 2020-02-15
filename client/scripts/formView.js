var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    debugger;
    Messages.addMessage(App.username, $('#message')[0].value, Rooms.room);
    Parse.create(Messages.getMostRecentLocalMessage());
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;

    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

};