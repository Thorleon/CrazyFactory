const path = require('path');
const express = require('express');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

app.use('/dist', express.static(path.join(__dirname, '/dist')));

app.get('/api', function(req, res, next) {
  var boss = {
    boss: {
      name: 'Deczko',
      drunk: false
    }
  };
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(boss));
});

app.all('/*', function(req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
