console.log("Node Start");
const express =require('express');
const cors =require('cors');
const dotenv =require('dotenv');
dotenv.config();
let PORT  = process.env.PORT|| 3000;
let HOST_NAME =process.env.HOST_NAME;
const app =express();
app.use(express.json());
app.use(cors());
const expenseTracker =require('./Router/ExpenseTracker/ExpenseTrackerRouter.js')
const dbConnection =require('./DataBase/DB.js');
const  authLogin  = require('./Router/UserRouter/UserRouter.js');
dbConnection();

app.use('/',authLogin);
app.use('/expense',expenseTracker);
app.set('views', './Views');
app.set('view engine' ,'pug');  
app.get('/',(req,res,next)=>{    
    res.render('index',{title:"am a pug",msg:'am a pug'})
})


app.listen(PORT,HOST_NAME,()=>{
    console.log(`am a server PORT:${HOST_NAME}:${PORT}`);
})
console.log("Node End");
