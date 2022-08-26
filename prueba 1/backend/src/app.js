import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import { dbConnectMySQL } from './config/mysql.js';

app.use(cors());
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({extended:true}));

const port = 3000;

app.use("/api", (await import('./routes/index.js')).default);

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
    console.log('Server is running on URL: ' + 'http://localhost:' + port);
});

dbConnectMySQL();
// import '../src/database/asociations.js';