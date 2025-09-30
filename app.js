import express from 'express';

import * as usersController from './controllers/usersController.js';

const port = process.env.PORT ?? 3000;

const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/new', usersController.createUsernameGet);
app.post('/new', usersController.createUsernamePost);

app.get('/', usersController.getUsernames);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
