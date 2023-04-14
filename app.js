
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const path = require('path')
const shopRoute = require('./routes/shop');
const adminData = require('./routes/admin');
const errorController = require('./controllers/error')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminData.route);
app.use(shopRoute);
app.use(errorController.get404)

app.listen(3000);