var chaiHttp = require("chai-http");
var chai = require('chai');
var expect = chai.expect;
var { app: server } = require('../server')
var postApi = "http://localhost:8000/api/post";

chai.use(chaiHttp);

it("getPostTest", () => {
    chai.request(server)
        .get(postApi)
        .then((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res).to.include("post");
        })
});

it("putPostTest", () => {
    chai.request(server)
        .put(postApi)
        .then((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.be.json;
        })
});

