import * as db from '../db/queries.js';

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log(`Usernames: ${usernames}`);

  res.render('pages/index', { title: 'Usernames', usernames: usernames });
}

async function createUsernameGet(req, res) {
  res.render('pages/new', { title: 'New Username' });
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);

  res.redirect('/');
}

export { getUsernames, createUsernameGet, createUsernamePost };
