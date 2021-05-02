var express = require('express');
var router = express.Router();

let todoList = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', todoList });
});

router.get('/add', function(req, res, next) {
  console.log(todoList)
  todoList.push(req.query['todo-input'])
  res.render('index', { title: 'Express', todoList });
});

module.exports = router;
