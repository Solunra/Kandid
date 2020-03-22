const chaiHttp = require("chai-http");
const chai = require('chai');
const {describe, it} = require("mocha");
const expect = chai.expect;
const app = require('../server');

chai.use(chaiHttp);

describe("Comment Tests", () => {
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

    it("putCommentTest", done => {
        chai.request(app)
            .put('/api/comment/')
            .query({PostID: "1"})
            .query({Comment: "this"})
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });
});