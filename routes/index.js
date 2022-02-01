let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
mongoose.connect('localhost:27017/WebStore');
let Schema = mongoose.Schema;

var productSchema = new Schema({
  name: String,
  price: String,
  stock: String
}, {collection: 'products'})

let ProductModel = mongoose.model('product', productSchema)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/insert', function(req, res, next) {
  const aProduct = {
    name: 'My first product',
    price: '5.95',
    stock: '10'
  }
  const data = new ProductModel(aProduct)
  data.save();
  res.redirect('/');
});

router.get('/find', function(req, res, next) {
  const aProduct = {
    name: 'My first product',
    price: '5.95',
    stock: '10'
  }
  const data = new ProductModel(aProduct)
  data.save();
  res.redirect('/');
})

router.get('/get-data', function(req, res, next) {
  ProductModel.find()
  .then(function(docs) {
    res.render('index', {title: 'Get data', items: docs});
  });
});


module.exports = router;
