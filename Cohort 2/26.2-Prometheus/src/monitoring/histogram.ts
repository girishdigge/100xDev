import client from 'prom-client';

const httpRequestDurationMicroseconds = new client.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP request in ms',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 2, 5, 10, 15, 50, 100, 300, 500, 1000, 3000, 5000],
});

//@ts-ignore
export const requestDuration = (req, res, next) => {
  const startTime = Date.now();

  res.on('finish', () => {
    const endTime = Date.now();
    const duration = endTime - startTime;
    setTimeout(() => {
      httpRequestDurationMicroseconds.observe(
        {
          method: req.method,
          route: req.route ? req.route.path : req.path,
          code: res.statusCode,
        },
        duration,
      );
    });
  });
  next();
};
