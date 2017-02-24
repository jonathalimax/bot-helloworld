var token = '355175782:AAGYWffs0nDFNmfkF3hGm1KfRP03M1NZUFw';

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });

console.log('bot server started...');

// Start
bot.onText(/\/start (.+)/, function (msg, match) {

  var welcome = 'Seja bem vindo ao Bot de marcação de consulta da OdontoSystem' +
    + 'Para mais informações acesse: www.odontosystem.com.br';
  bot.sendMessage(msg.chat.id, welcome).then(function () {
    // reply sent!
  });
});

bot.onText(/\/say_hello (.+)/, function (msg, match) {

  var name = match[1];
  bot.sendMessage(msg.chat.id, 'Hello ' + name + '!').then(function () {
    // reply sent!
  });
});
