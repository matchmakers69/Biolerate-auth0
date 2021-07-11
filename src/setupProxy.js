const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/auth/token',
    createProxyMiddleware({
      target: 'dev-h7rcrzi5.eu.auth0.com',
      changeOrigin: true,
    })
  );
};