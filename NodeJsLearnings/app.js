// To use ES module method use import like below example and change file extension to .mjs
// import {EventEmitter} from 'events';
// const emitter = new EventEmitter();

// emitter.emit("messageLogged");

const name = 'Hello world'

// const logging = require('./logger.js')
// console.log(logging)
// console.log(module)

// Path module
// const path = require('path');
// const pathObj = path.parse(__dirname)
// console.log(pathObj)

// OS module
// const os = require('os');
// console.log(os.hostname());

// File module
// const file = require('fs')

// console.log(file.readdirSync('../'));

// file.readdir('#', (err, fl)=>{
//     if (err) console.log("error", err);
//     else console.log("result ", fl);
// })

// Events ---- basic
// const EventEmitter = require('events')

// const emitter = new EventEmitter()

// emitter.on('messageLogged', () => {
//   console.log('Listener Called')
// })

// emitter.emit('messageLogged')

// emitter.on('logging', (arg)=>{
//     console.log(arg.data);
// })

// emitter.emit('logging', {data:"Hello"})

// Extending eventEmitter
// const log = require('./logger')

// const logging = new log()

// logging.on('messageLogged', (arg)=>{
//     console.log("listener called",arg);
// })

// logging.log("Message has been logged")

const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
        console.log(req.url);
        res.write("Hello World")
        res.end()
    } 
    if(req.url === '/this_is_a_secret_site_that_is_hidden_from_outside_world'){
        console.log(req.url);
        const file = require('fs')
        
        res.write(JSON.stringify(file.readdirSync('../',(err,fl)=> fl).join(" ")))  
        res.end()
    }
})

// server.on('connection', (socket) => {
//     console.log(socket.address());
// })

server.listen(3000);

