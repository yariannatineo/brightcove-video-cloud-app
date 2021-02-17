const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = app => {
    app.use(createProxyMiddleware('/api', { 
		target: 'https://bc-video-cloud-app.herokuapp.com:8080',
      	changeOrigin: true
	}
   )
  );
};
