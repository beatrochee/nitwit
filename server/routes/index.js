const usersController = require('../controllers').users;
const subscriptionsController = require('../controllers').subscriptions;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Nitwit API!',
  }));

  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);
  app.post('/api/users/:userId/subscriptions', subscriptionsController.create)
};