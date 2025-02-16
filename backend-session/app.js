import cors from 'cors';
import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import path from 'path';
import { PORT, sessionConfig } from './config.js';
import routerUser from './routes/users.routes.js';

const app = express();


const __dirname = path.resolve();

// Middlewares 
app.use(cors({ // Permitir solicitudes desde el front-end
    origin: [
        'http://localhost:5500',
        'http://localhost:3000',
        'http://localhost:3001',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Habilitar envío de cookies
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sessionConfig));


app.use(routerUser)



app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`));
