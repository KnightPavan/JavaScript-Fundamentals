let url = 'www.goolge.com'

// function log(message){
//     console.log(message);
// }

// module.exports.log = log;
const EventEmitter = require('events')

class Logging extends EventEmitter {
  log (message) {

    console.log(message);

    this.emit('messageLogged', { id: '1', url: 'https://' })
  }
}

module.exports = Logging