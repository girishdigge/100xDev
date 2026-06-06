import client from 'prom-client';

const activeUserGauge = new client.Gauge({
  name: 'active_users',
  help: 'Total number of users whose request hasnt yet resolved',
  labelNames: ['method', 'route', 'status_code'],
});

//@ts-ignore
export const activeUser = (req, res, next) => {
  activeUserGauge.inc({
    method: req.method,
    route: req.route ? req.route.path : req.path,
  });

  res.on('finish', () => {
    setTimeout(() => {
      activeUserGauge.dec({
        method: req.method,
        route: req.route ? req.route.path : req.path,
      });
    }, 10000);
  });
  next();
};
