const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product',{pageTitle:"Add Product"})
  }

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title
    const imageUrl =req.body.imageUrl
    const price =req.body.price
    const description =req.body.description
    const product = new Product(title,imageUrl,price,description)
    product.save();
    res.redirect("/");
  }

exports.getProducts = (req,res,next) => {
  Product.fetchAll(products=>{
    res.render("admin/products", {
      prod: products,
      pageTitle: "Admin Products",
      hasProducts: products.length > 0,
      path:'/admin/products'
    });
  }); 
}