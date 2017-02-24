'use strict';

const Telegram = require('telegram-node-bot');

class DorController extends Telegram.TelegramBaseController {
  dorHandler($) {
    $.sendMessage('A dor que está sentindo é no dente?');
  }

  resDorHandler($) {
    $.sendMessage('Marque sua consulta no site: www.odontosystem.com.br');
  }

  get routes() {
    return {
      'dorCommand': 'dorHandler',
      'simCommand': 'resDorHandler'
    };
  }
}

module.exports = DorController;
