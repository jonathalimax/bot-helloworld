var token = '355175782:AAGYWffs0nDFNmfkF3hGm1KfRP03M1NZUFw';

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });

console.log('bot server started...');

bot.onText(/^\/say_hello (.+)$/, function (msg, match) {
console.log('work');
  var name = match[1];
  bot.sendMessage(msg.chat.id, 'Hello ' + name + '!').then(function () {
    // reply sent!
  });
});
