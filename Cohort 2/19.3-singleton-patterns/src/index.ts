import { gameManager } from './store';
import { startLogger } from './logger';
let num = 1;
startLogger();
setInterval(() => {
  gameManager.addGame(num.toString());
  gameManager.addMove('1', 'b5');
  num++;
}, 3000);
