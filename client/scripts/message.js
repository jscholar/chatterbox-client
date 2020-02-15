class Message {

  constructor(username, text, room, timeStamp = '5') {
    this.username = this.escapeText(username);
    this.text = this.escapeText(text);
    this.roomname = this.escapeText(room);
    this.timeStamp = timeStamp;
  }

  escapeText(text) {
    var str = '';
    var charArray = text.split('');
    for (var char of charArray) {
      switch (char) {
      case '&':
        str += '&amp;';
        break;
      case '<':
        str += '&lt;';
        break;
      case '>':
        str += '&gt;';
        break;
      case '"':
        str += '&quot;';
        break;
      case '\'':
        str += '&#x27;';
        break;
      case '/':
        str += '&#x2F;';
        break;
      default:
        str += char;
      }
    }
    return str;
  }
}