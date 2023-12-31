import 'dotenv/config'
import express from 'express';
import router from './router';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.disable('x-powered-by');

const corsOptions = {
    origin:[process.env.URI_DEVELOPMENT as string,process.env.URI_PRODUCTION as string]
}
app.use(cors(corsOptions))

app.get('/', (req,  res) => {
    res.status(200).json({message: 'hello'})
})

app.use('/api',router)


app.listen(3030,() => {console.log("Server Started on Port 3030")});