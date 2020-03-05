var chaiHttp = require("chai-http");
var chai = require('chai');
var expect = chai.expect;
var { server } = require('../server');

chai.use(chaiHttp);

it("getPostTest", () => {
    chai.request(server)
        .get("http://localhost:8000/api/post")
        .then((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res).to.include("post");
        })
});

it("putPostTest", () => {
    chai.request(server)
        .put("http://localhost:8000/api/post")
        .then((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.be.json;
        })
});

