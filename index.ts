import Server from './classes/server';
import { SERVER_PORT } from './global/environment'
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

//bodyparser
server.app.use(bodyParser.urlencoded({ extended: true}));
server.app.use(bodyParser.json());

//cors
server.app.use(cors({origin: true, credentials: true}));

//routes
server.app.use('/', router)

server.start (() => {
    console.log(`Server corriendo en puerto ${ SERVER_PORT }`);
});