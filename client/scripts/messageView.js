var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="time-stamp">
          <%= timeStamp %>
        </div>
        <div class="username">
          <%= username %>
        </div>
        <div class="message-text">
          <%= text %>
        </div>
      </div>
    `)

};