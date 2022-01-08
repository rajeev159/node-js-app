const chai = require("chai");
const expect = chai.expect;

const utill = require("../utills/utill");


describe("utill", function () {
    describe("sumtwonum", function () {
        it("It should add two numbers", async function () {
            const result = utill.sumtwonum(20, 30)
            expect(50).to.equal(result);
        });
    });
});