var Messages = {

  messageChunk: [],
  getAllMessages: function() {
    return this.messageChunk;
  },

  addUserInputtedMsg: function(msg) {
    messageChunk.push(msg);
    Parse.create(msg);
  }

};
