import MascotBot from './bots/mascot-bot.js';
import TestBehavior from './behaviors/test-behavior.js';

const name = process.env.NAME || 'Beatz Bot',
  beatzBot = new MascotBot({
    debug: true,
    name,
    behaviors: [
      TestBehavior
    ]
  });

beatzBot.launch();