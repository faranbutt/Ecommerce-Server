const Product = require('../models/product')


exports.getProducts  = (req, res, next) => {
    Product.fetchAll(products=>{
      res.render("shop/product-list", {
        prod: products,
        pageTitle: "All Products",
        hasProducts: products.length > 0,
        shopCSS:true,
        path:'/products'
      });
    }); 
  }

exports.getIndex  = (req, res, next) => {
    Product.fetchAll(products=>{
      res.render("shop/index", {
        prod: products,
        pageTitle: "Shop",
        hasProducts: products.length > 0,
        shopCSS:true
      });
    }); 
  }

  exports.getCart  = (req, res, next) => {
    res.render('shop/cart',{
      path:'/cart',
      pageTitle:"Your Cart",

    })
  }
exports.getCheckout = (res,req,next) => {
  res.render('shop/checkout',{
    path:"/checkout",
    pageTitle:"Checkout"
  })
}

exports.getOrders = (res,req,next) => {
  res.render('shop/orders',{
    path:"/orders",
    pageTitle:"Orders"
  })
}
