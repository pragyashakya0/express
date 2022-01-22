var express = require('express');
var router = express.Router();

const employees = require('../resources/employees')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Employees', employeeList: employees});
});

router.get('/add-employee', function(req,res, next){
  res.render('addEmployee',{title: 'Add Employee'});
})

router.post('/save-employee', function(req, res, next){
  console.log(req.body)
})

module.exports = router;
