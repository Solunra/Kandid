const {describe, it, after} = require("mocha");
const chaiHttp = require("chai-http");
const chai = require('chai');
const expect = chai.expect;
const app = require('../server');
const mongoose = require('mongoose');

chai.use(chaiHttp);

describe("User Tests", () => {
    it("createTestAccount", done => {
        chai.request(app)
            .put('/api/register/')
            .send({profile: {firstname: "test", lastname: "test", email: "donot@change.this", password: "test", confirmPassword: "test"}})
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });
    it("getTestAccount", done => {
        chai.request(app)
            .put('/api/login/')
            .send({profile: {email: "donot@change.this", password: "test"}})
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });
    after("cleanDatabase", done => {
            mongoose.connection.dropCollection("users").then(done());
        }
    )
});
