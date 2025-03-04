import { games } from './store';
import { startLogger } from './logger';

startLogger();
setInterval(() => {
  games.push({
    id: Math.random().toString(),
    whitePlayerName: 'Girish Digge',
    blackPlayerName: 'Andria Botaz',
    moves: [],
  });
}, 5000);
