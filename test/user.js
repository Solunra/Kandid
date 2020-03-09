const chaiHttp = require("chai-http");
const chai = require('chai');
const expect = chai.expect;
const app = require('../server');

chai.use(chaiHttp);

describe("User Tests", () => {
    before("createAnAccount", done => {
        chai.request(app)
            .get('/api/register/test')
            .end((err, res) => {
                done();
            })
    });
    it("getTestAccount", done => {
        chai.request(app)
            .put('/api/login/')
            .send({profile: {email: "noahf303@gmail.com", password: "password"}})
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });

    it("createTestAccount", done => {
        chai.request(app)
            .put('/api/register/')
            .send({profile: {firstname: "test", lastname: "test", email: "test@test.com", password: "test", confirmPassword: "test"}})
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });
    after("cleanDatabase", done => {
            mongoose.connection.dropCollection("users");
        }
    )
});