const chaiHttp = require("chai-http");
const chai = require('chai');
const expect = chai.expect;
const app = require('../server');

chai.use(chaiHttp);

describe("Follow Tests", () => {
    it("putFollowTest", done => {
        chai.request(app)
            .put('/api/follow/')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });

    it("putFollowTest", done => {
        chai.request(app)
            .get('/api/follow/unfollow')
            .query({followee: "one", follower: "two"})
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                done();
            });
    });
});
