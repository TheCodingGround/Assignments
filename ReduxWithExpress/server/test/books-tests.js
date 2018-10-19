var assert = require('assert');
const chai = require('chai');
var expect = chai.expect;
const {  } = require('../src/commands')
const { saveUser, addBookForUser, } = require('../src/commands')
const { clearTable } = require('./helpers') 

  const clearTables = async () => {
    await clearTable('books')
    await clearTable('users')
  }

describe('Books', function () {
  afterEach(async function () {
    await clearTables()
  })

  it('Can add a book for a user', async function () {
    const userId = await createFakeUser()

    const bookName = 'Book'
    const id = await addBookForUser(userId, bookName)
    expect(id).to.be.gt(0)
  });

});

const createFakeUser = async () => {
  const user = {
    name: "FakeNameForBook",
    surname: "FakeSurnameForBook",
    email: "Fake@fake.com"
  }

  const id = await saveUser(user)
  return id
}