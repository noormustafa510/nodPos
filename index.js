const app = require('./app');
//const db = require('./config/db');
//const todoModel = require('./models/todo.model')

const port = 3000;

// app.get('/', (req,res)=>{
//     res.send('Hello')
// })

app.listen(port, ()=>{
    console.log(`Server listening on http://localhost:${port}`)
});
