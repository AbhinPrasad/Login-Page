var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let products = [
    {
      name: 'Samsung Galaxy M12',
      category: 'Mobile',
      description: '| 4 GB RAM | | 64 GB | | BLACK |',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcd1a5sr1VtNErbIaLqtMlABpYITbswbmk7zZ7glZqj3jJOiBrC0nsGerpvFdBO_SFowdBfKfGnbRdC_3pjVrLfucluTHA6k6Fv2lNkDlFKtJoCKv_AXIH0g&usqp=CAE'
    },

    {
      name: 'Samsung Galaxy S22 Ultra',
      category: 'Mobile',
      description: '| 12 GB RAM | | 256 GB | | PINK |',
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTxlAldm1HsmmrRN0nu1lJw1PQjM9WDVv9UD47hj8mT5P7euBFbasN5tO2FQA0MUphOpIDgtDchji0Idn9YfUrgDhGmffm0OW7PfplkiLBI5KXbK1ms0gb6&usqp=CAE'

    },

    {
      name: 'Oneplus Nord',
      category: 'Mobile',
      description: '| 12 GB RAM | | 256 GB | | SILVER |',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR6wV8AkaSZWz8BZj5fmb7YTcSeYA7pG4VYWkHEkH4OpPuMVzB1I5iNHhPjO9I6hCcGK4Tjj-jQpmfPIrBwsrSDPldyDJyAfhgh6nZXSq3Mj1jSLddRVYnG&usqp=CAE'
    },

    {
      name: 'Apple Iphone 13 Pro',
      category: 'Mobile',
      description: '| 8 GB RAM | | 256 GB | | BLUE |',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQmuwAPuGyWD_btFpLaFuE3RyOOZxZ9jN0g1dD_qRMjO9IXE7sUC_InuKy1_OaZvZBavfvyiCdN2BdNFYPhs_IZoE0GBfii5NXUngnK0q0LNV3Pvvz0Fh5ukA&usqp=CAE'

    }

  ]

  if (req.session.login) {
    res.render('users', { products });
  } else {
    res.redirect("/");

  }
});

module.exports = router;
