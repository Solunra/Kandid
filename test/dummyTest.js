var assert = require('chai').assert;

describe("dummyTests", () => {
    it("checkTrue", () => {
        assert.isTrue(true, "True is true");
    });

    it("checkEquals", () => {
        assert.equal(true, true, "True is equal to true");
    });
});
