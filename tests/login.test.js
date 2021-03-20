const supertest = require('supertest');
const app = require('../src/app');
const request = supertest(app);

describe("Users authentication", () => {
  it("Must login a user successfully", () => {
    let user = { email: "teste2@gmail.com", password: "teste@" }

    return request.post("/login").send(user)
           .then(res => {
             expect(res.status).toEqual(200);
             expect(res.body.token).toBeDefined();
           }).catch(error => {
             failt(error);
           })
  })
})
