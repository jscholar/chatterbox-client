var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Messages.fetchMessages(this.render);
  },

  render: function() {
    // Render messsages to DOM
    var html = '';
    var messages = Messages.getAllMessages();
    for (var {username, text, createdAt} of messages) {
      // Create a message DOM element
      html += MessageView.render({
        timeStamp: createdAt,
        username: username,
        text: text
      });
    }
    MessagesView.$chats.append(html);
  }

};