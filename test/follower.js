const chaiHttp = require("chai-http");
const chai = require('chai');
const expect = chai.expect;
const app = require('../server');
const {describe, it, before, after} = require("mocha");
const mongoose = require('mongoose');

chai.use(chaiHttp);

describe("Follow Tests", () => {
    before("createAnAccount", done => {
        chai.request(app)
            .get('/api/register/test')
            .end((err, res) => {
                done();
            })
    });

    // it("putFollowTest", done => {
    //     chai.request(app)
    //         .put('/api/follow/')
    //         .query({followee: "noahf303@gmail.com", follower: "noahf303@gmail.com"})
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             expect(res).to.have.status(200);
    //             expect(res).to.be.json;
    //             done();
    //         });
    // });

    it("putUnfollowTest", done => {
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
