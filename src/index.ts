import 'dotenv/config'
import express from 'express';
import router from './router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.disable('x-powered-by');

app.get('/', (req,  res) => {
    res.status(200).json({message: 'hello'})
})

app.use('/api',router)


app.listen(3030,() => {console.log("Server Started on Port 3030")});