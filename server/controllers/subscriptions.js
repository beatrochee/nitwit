const Subscription = require('../models').Subscription;

module.exports = {
  create(req, res) {
    return Subscription
      .create({
        amount: req.body.amount,
        max: req.body.max,
        userId: req.params.userId,
      })
      .then(subscription => res.status(201).send(subscription))
      .catch(subscription => res.status(400).send(error));
  },
};