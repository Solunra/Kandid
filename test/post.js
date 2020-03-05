const chaiHttp = require("chai-http");
const chai = require('chai');
const expect = chai.expect;
const app = require('../server');

chai.use(chaiHttp);

describe("Post Tests", () => {
    it("getPostTest", done => {
        chai.request(app)
            .get("http://localhost:8000/api/post")
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.include("post");
                done();
            });
    });

    it("putPostTest", done => {
        chai.request(app)
            .put("http://localhost:8000/api/post")
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });
});
