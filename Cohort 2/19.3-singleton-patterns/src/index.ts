import { games } from './store';
import { startLogger } from './logger';
let num = 1;
startLogger();
setInterval(() => {
  games.push({
    id: Math.random().toString(),
    whitePlayerName: 'Girish Digge' + num,
    blackPlayerName: 'Andria Botaz' + num,
    moves: [num.toString()],
  });
  num++;
}, 2000);
