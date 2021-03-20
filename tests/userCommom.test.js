const supertest = require('supertest');
const app = require('../src/app');
const request = supertest(app);

describe("User commom registration", ()=> {
	it("Must register a user commom with sucess", ()=> {
		let time = Date.now();
		let email =  `${time}@gmail.com`;
		let user = { name: "Teste", email, password: "teste@" }

		return request.post("/usercommom").send(user)
			.then(res => {
				expect(res.status).toEqual(201);
			}).catch(error => {
				fail(error);
			})
	})
})
