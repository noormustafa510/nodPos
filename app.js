const express = require('express');
//const cors = require('cors');

const body_parser = require('body-parser');
const productRouter = require('./routes/product.routes');
const expenseRouter = require('./routes/expense.routes');
const inventoryRouter = require('./routes/inventory.routes');
const prefRouter = require('./routes/pref.routes');
const saleRouter = require('./routes/sale.routes');



//const todoRouter = require('./routes/todo.router')

const app = express();

app.use(body_parser.json());
//app.use(cors());
app.use('/',productRouter);
app.use('/',expenseRouter);
app.use('/',inventoryRouter);
app.use('/',prefRouter);
app.use('/',saleRouter)




module.exports = app;