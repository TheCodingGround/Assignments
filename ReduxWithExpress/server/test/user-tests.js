var assert = require('assert');
const chai = require('chai');
var expect = chai.expect;
const { saveUser } = require('../src/commands')
const { getUserByEmail } = require('../src/queries')
const { clearTable } = require('./helpers')

describe('User', function () {
    afterEach(async function(){
        await clearTable('users')
    })

    const testUser = {
      name: "FakeName",
      surname: "FakeSurname",
      email: "Fake@fake.com"
    }
  it('Should be able to save a new user to the database', async function () {
    const id = await saveUser(testUser)
    expect(id).to.be.gt(0)
  });

  it('Should be able to get a user by name from the database', async function(){
      await saveUser(testUser)
      const user = await getUserByEmail('Fake@fake.com')

      expect(user.name).to.eq(testUser.name)
      expect(user.surname).to.eq(testUser.surname)
      expect(user.email).to.eq(testUser.email)
      })
});