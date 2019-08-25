import Koa from 'koa'; // koa@2
import KoaRouter from 'koa-router'; // koa-router@next
import koaBody from 'koa-bodyparser'; // koa-bodyparser@next
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';
// знакомство с schema ждет нас впереди
// db.js - файл отвечающий за подключение к MongoDB
import schema from './schema/schema';

const app = new Koa();
const router = new KoaRouter();
// koaBody is needed just for POST.
app.use(koaBody());
// POST и GET запросы будут перенаправляться в схему GraphQL
router.post('/graphql', graphqlKoa({ schema }));
router.get('/graphql', graphqlKoa({ schema }));
// инструмент для тестирования запросов localhost:3000/graphiql
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
