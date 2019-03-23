import dotenv from 'dotenv';
import path from 'path';
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';
import schema from './schema';
import { sendSecretMail } from './utils';

dotenv.config({ path: path.resolve(__dirname, '.env') });

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

server.express.use(logger('dev'));

server.start({ port: PORT }, () => console.log(`Server running on  http://localhost:${PORT}`));
