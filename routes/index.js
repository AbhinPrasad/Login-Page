var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  if (req.session.login) {
    res.redirect('/users')

  } else {
    res.render('index', { loginError: req.session.loginError });
    req.session.loginError = false
  }

});

const email = 'theabhin.prasad@gmail.com'
const password = 123456




router.post('/login', function (req, res, next) {

  let emailid = req.body.email
  let pass = req.body.password
  console.log(req.body)

  if (email == emailid && password == pass) {
    req.session.login = true
    res.redirect('/users')
  } else {

    req.session.loginError = true
    res.redirect('/')
    

  }

})

router.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})

module.exports = router;
