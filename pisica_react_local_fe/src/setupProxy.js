const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://razvangherman.runasp.net', //BE api url
            changeOrigin: true,
/*            secure: false*/
        })
    );
};
