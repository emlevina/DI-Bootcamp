const express = require('express');
const connectDB = require('./db'); 
const tasks_router = require('./routes/tasks')
require('dotenv').config();
const app = express();
const port = 3001;


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/api/tasks', tasks_router)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('connected to DB')
        app.listen(port, ()=>{
            console.log(`Server listens on port ${port}`);
        })
    } catch (error) {
        console.log(error)
    }
   
}

start()