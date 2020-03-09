const chaiHttp = require("chai-http");
const chai = require('chai');
const expect = chai.expect;
const app = require('../server');

chai.use(chaiHttp);

describe("Post Tests", () => {
    it("getPostTest", done => {
        chai.request(app)
            .get('/api/post/')
            .query({email: 'noahf303@gmail.com'})
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });

    it("postPostTest", done => {
        chai.request(app)
            .post('/api/post/')
            .attach('image', __dirname + '/image/cat.jpg')
            .field('Caption', "hi")
            .field('UserID', 'noahf303@gmail.com')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });
});
