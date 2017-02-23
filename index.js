'use strict';

const Telegram = require('telegram-node-bot'),
  tg = new Telegram.Telegram('355175782:AAGYWffs0nDFNmfkF3hGm1KfRP03M1NZUFw', {
    workers: 1
  });

const DorController = require('./controllers/dor');
const otherwiseController = require('./controllers/otherwise');

tg.router.when(new Telegram.TextCommand('/dor', 'dorCommand'), new DorController())
  .otherwise(new otherwiseController());

  tg.router.when(new Telegram.TextCommand('/sim', 'simCommand'), new DorController())
    .otherwise(new otherwiseController());

    tg.router.when(new Telegram.TextCommand('/não', 'naoCommand'), new DorController())
      .otherwise(new otherwiseController());
