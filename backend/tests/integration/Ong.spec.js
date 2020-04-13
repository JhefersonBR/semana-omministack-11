const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe('ONG', () =>{
    beforeEach(async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async ()=>{
       await connection.destroy();
    });

    it('shold be able to create a new ONG', async ()=>{
        const response = await request(app)
        .post('/ongs')
        //.set('Authorization', 'asd')
        .send({
            name: "APAD3",
            email: "contato@apad.com.br",
            whatsapp: "31996670736",
            city: "Sete Lagoas",
            uf: "MG"
        });
        
        expect(response.body).toHaveProperty('id');

        expect(response.body.id).toHaveLength(8);
    });
});