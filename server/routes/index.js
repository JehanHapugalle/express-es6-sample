import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('My Student ID is 123456. Welcome to Express');
});

export default router;
