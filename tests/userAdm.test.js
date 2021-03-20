const supertest = require('supertest');
const app = require('../src/app');
const request = supertest(app);

describe("User admin registration", () => {
  it("Must register a user admin with sucess", () => {
    let time = Date.now();
    let email = `${time}@gmail.com`
    let userAdm = { name: "Teste", email, password: "admTeste@" }

    return request.post("/useradm").send(userAdm)
           .then(res => {
             expect(res.status).toEqual(201);
           }).catch(error => {
             fail(error);
           })
  })
})
