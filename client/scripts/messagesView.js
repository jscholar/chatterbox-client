var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    this.render();
  },

  render: function() {
    // Render messsages to DOM
    var html = '';
    var messages = Messages.getAllMessages();
    for (var {username, text} of messages) {
      // Create a message DOM element
      html += MessageView.render({
        username: username,
        text: text
      });
    }
    this.$chats.append(html);
  }

};