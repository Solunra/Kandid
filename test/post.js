const chaiHttp = require("chai-http");
const chai = require('chai');
const expect = chai.expect;
const app = require('../server');
const mongoose = require('mongoose');

chai.use(chaiHttp);

describe("Post Tests", () => {
    before("createAnAccount", done => {
        chai.request(app)
            .get('/api/register/test')
            .end((err, res) => {
                done();
            })
    });
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
    after("cleanDatabase", done => {
            mongoose.connection.dropCollection("users");
            done()
        }
    )
});
