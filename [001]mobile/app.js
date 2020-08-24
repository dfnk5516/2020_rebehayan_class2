const express = require('express');
const path = require('path');
const app = express();
const port = 80;
const nunjucks = require('nunjucks');
const router = require('./router');
const logger = require('morgan');

nunjucks.configure('public/views', {
  autoescape: true,
  express: app,
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

app.listen(port, ()=>{
  console.log(`server started on http://localhost:${port}`);
})
