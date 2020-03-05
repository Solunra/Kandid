var chaiHttp = require("chai-http");
var chai = require('chai');
var expect = chai.expect;

var postApi = "http://localhost:8000/api/post";

chai.use(chaiHttp);

it("getPostTest", () => {
    chai.request(postApi)
        .get('/')
        .then((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res).to.include("post");
        })
});

it("putPostTest", () => {
    chai.request(postApi)
        .put('/')
        .then((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.be.json;
        })
});

