const express = require('express');
const router = express.Router();

const productC = require('../controllers/productController');

router
.get('/addproduct',productC.addProductForm)
.post('/',productC.addProduct)
.get('/show',productC.showProduct)


module.exports = router;