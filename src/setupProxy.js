const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',  // This is the path you want to proxy
    createProxyMiddleware({
      target: 'http://139.59.6.16',  // This is the target server
      changeOrigin: true,
    })
  );
};
