module.exports = (app, db) => {

    const users = require('./controllers/users')(db);

    app.get('/login', users.home);
    // app.get('/users/new', users.newUser);
    // app.post('/users', users.users);
    // app.get('/login', users.signIn);
    // app.post('/login', users.postTweets);
    // app.get('/special', tweets.cookie);
    // app.get('/tweets/new', tweets.newTweets);
    // app.post('/tweets/new', tweets.postNewTweets);
}