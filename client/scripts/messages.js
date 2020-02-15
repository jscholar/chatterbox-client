var Messages = {

  messageChunk: [],
  getAllMessages: function() {
    return this.messageChunk;
  },

  sendUserInputtedMsg: function(msg) {
    Parse.create(msg);
  },

  //
  addMessage: function(username = 'name', text = 'message', roomname = 'room', createdAt = 'local time') {
    msg = new Message(username, text, roomname, createdAt);
    this.messageChunk.push(msg);
  },

  //----------------------- NOTE -------------------------//
  //      Account for incoming messages in the future     //
  //------------------------------------------------------//
  getMostRecentLocalMessage: function() {
    return this.messageChunk[this.messageChunk.length - 1];
  },

  // Fetch array of messages and store them.
  fetchMessages: function(onSuccess) {
    Parse.readAll(({results}) => {
      //debugger;
      results.forEach(message => {
      //if (message.username && message.text && message.roomname && message.createdAt) {
        this.addMessage(message.username, message.text, message.roomname, message.createdAt);
      //  }
      });
      onSuccess();
    });
  }

};
