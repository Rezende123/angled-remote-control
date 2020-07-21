const proxy = [
    {
      context: '/api',
      target: 'http://192.168.25.235:8080',
      pathRewrite: {'^/api' : ''}
    }
];
module.exports = proxy;
