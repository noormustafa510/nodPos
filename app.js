const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const body_parser = require('body-parser');
const productRouter = require('./routes/product.routes');
const expenseRouter = require('./routes/expense.routes');
const inventoryRouter = require('./routes/inventory.routes');
const prefRouter = require('./routes/pref.routes');
const saleRouter = require('./routes/sale.routes');
const userRouter = require('./routes/user.routes');
const printRouter = require('./routes/print.routes');





//const todoRouter = require('./routes/todo.router')

const app = express();

app.use(body_parser.json());
dotenv.config();
app.use(cors());
app.use('/',productRouter);
app.use('/',expenseRouter);
app.use('/',inventoryRouter);
app.use('/',prefRouter);
app.use('/',saleRouter);
app.use('/',userRouter);
app.use('/',printRouter);






module.exports = app;