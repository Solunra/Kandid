const chaiHttp = require("chai-http");
const chai = require('chai');
const expect = chai.expect;
const server = require('../server');

chai.use(chaiHttp);

describe("Post Tests", () => {
    it("getPostTest", done => {
        chai.request(server)
            .get("http://localhost:8000/api/post")
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res).to.include("post");
                done();
            });
    });

    it("putPostTest", done => {
        chai.request(server)
            .put("http://localhost:8000/api/post")
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });
});
