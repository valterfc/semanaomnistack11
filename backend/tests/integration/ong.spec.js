const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  // antes de cada teste
  beforeEach(async () => {
    //await connection.migrate.rollback({ all: true }); // na documentação diz que existe o parâmetro "all"
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  // depois de todos os testes
  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD3",
        email: "contato@apad3.com.br",
        whatsapp: "47000000000",
        city: "Rio do Sul",
        uf: "SC",
      })

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  })
});
