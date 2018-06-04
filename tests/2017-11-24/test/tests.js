var assert = require("assert");
var expect = require("chai").expect;
var stringCal = require("../string-calculator");
const stringCalculator = stringCal.stringCal

describe("string-calculator", function () {
    it("should return zero for an empty string", function () {
        //console.log(StringCal)
        expect(stringCalculator("")).to.be.eql(0);
    });
});

describe("string-calculator", function () {
    it("should return a number if the one digit is passed in ", function () {
        //console.log(StringCal)
        expect(stringCalculator("1")).to.be.eql(1);
    });
});
describe("string-calculator", function () {
    it("should add the digits in a string and return the sum", function () {
        //console.log(StringCal)
        expect(stringCalculator("1,23,2,2")).to.be.eql(28);
    });
});
// console.log(StringCal("1,-2"));

describe("string-calculator", function () {
    it("should escape non digit elements", function () {
        //console.log(StringCal)
        expect(stringCalculator("//;1;2")).to.be.eql(3);
    });
});
describe("string-calculator", function () {
    it("should escape non digit elements", function () {
        //console.log(StringCal)
        expect(stringCalculator("1,\n")).to.be.eql(1);
    });
});
describe("string-calculator", function () {
    it("should escape non digit elements", function () {
        //console.log(StringCal)
        expect(stringCalculator("//-\n-23-2-2")).to.be.eql(27);
    });
});
describe("string-calculator", function () {
    it("should throw error if there are negative digits in the string", function () {
        //console.log(StringCal)
        expect(() => stringCalculator("1,-2")).to.throw("negatives not allowed");
    });
});