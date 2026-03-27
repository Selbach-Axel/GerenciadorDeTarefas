import Fastify from 'fastify';
import {env} from '../src/config/env.js'

const app = Fastify({logger:true});

app.listen({port:env.PORT}).then(()=>{
    console.log('O pai tá ON-LINE Muahahahaha não ri')
})