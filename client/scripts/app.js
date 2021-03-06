var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.startSpinner();
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.stopSpinner();

  },

  fetch: function(callback = ()=>{}) {
    // Parse.readAll((data) => {
    //   // examine the response from the server request:
    //   console.log(data);
    //   Messages['messageChunk'] = data['results'];
    //   callback();
    //   MessagesView.initialize();
    // });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
