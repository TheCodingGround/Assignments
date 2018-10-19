var assert = require('assert');
const chai = require('chai');
var expect = chai.expect;

const { validUser } = require('../src/validations')

describe('Validations', function () {
  describe('User', function () {
    it('Invalid User returns false', function () {
        const user = {
          surname: "T",
          email: "t@t.com"
        }
        const valid = validUser(user)
        expect(valid).to.be.false
    });

    it('Valid User returns true', function () {
        const user = {
          name: "T",
          surname: "T",
          email: "t@t.com"
        }
        const valid = validUser(user)
        expect(valid).to.be.true
    });
  })
});