import { GameManager } from './store';
import { startLogger } from './logger';
let num = 1;
startLogger();
setInterval(() => {
  GameManager.getInstance().addGame(num.toString());
  GameManager.getInstance().addMove('1', 'b5');
  num++;
}, 3000);
