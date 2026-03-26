import Fastify from 'fastify';

const app = Fastify({logger:true});

app.listen({port:3333}).then(()=>{
    console.log('O pai tá ON-LINE Muahahahaha não ri')
})