const chaiHttp = require("chai-http");
const chai = require('chai');
const {describe, it, before, after} = require("mocha");
const expect = chai.expect;
const app = require('../server');
const mongoose = require('mongoose');

chai.use(chaiHttp);

describe("Comment Tests", () => {
    before("createAnAccount", done => {
        chai.request(app)
            .put('/api/register/')
            .send({profile: {firstname: "test", lastname: "test", email: "donot2@change.this", password: "test", confirmPassword: "test"}})
            .then(done());
    });
    it("getCommentTest", done => {
        chai.request(app)
            .get('/api/comment/')
            .send({PostID: "1"})
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });

    it("postCommentTest", done => {
        chai.request(app)
            .post('/api/comment/')
            .send({email: "donot2@change.this", PostID: "1", Comment: "this"})
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
