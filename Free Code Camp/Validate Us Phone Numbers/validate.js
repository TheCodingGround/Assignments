//write a function that validates the following numbers:

const { expect } = require('chai');


const telephoneCheck = (str) => {
  return /^\d{10}$|^\d{3}[-\s]\d{3}[-\s]\d{4}$|^1\s\d{3}[-\s]\d{3}[-\s]\d{4}$|^\(\d{3}\)\d{3}[- ]\d{4}$|^\(\d{3}\) \d{3}[- ]\d{4}$/.test(str);
};

describe('Validate Us Phone Numbers', function(){
  it('1 (555) 555 5555 is valid', function(){
    expect(telephoneCheck('1 (555) 555-5555')).to.equal(true);
  });

  it('(555)555 5555 is valid', function(){
    expect(telephoneCheck('(555)555 5555')).to.equal(true);
  });

  it('(555)555-5555 is valid', function(){
    expect(telephoneCheck('(555)555-5555')).to.equal(true);
  });

  it('(555) 555-5555 is valid', function(){
    expect(telephoneCheck('(555) 555-5555')).to.equal(true);
  });


  it('5555555555 is valid', function(){
    expect(telephoneCheck('5555555555')).to.equal(true);
  });

  it('5555555 is invalid', function(){
    expect(telephoneCheck('5555555')).to.equal(false);
  });

  it('asdf5555555555 is invalid', function(){
    var isValidNumber = telephoneCheck('asdf5555555555');
    expect(isValidNumber).to.equal(false);
  });

  it('a5555555555 is not valid', function(){
    expect(telephoneCheck('a5555555555')).to.equal(false);
  });

  it('555-555-5555 is valid', function(){
    expect(telephoneCheck('555-555-5555')).to.equal(true);
  });

  it('555 555 5555 is valid', function(){
    expect(telephoneCheck('555 555 5555')).to.equal(true);
  });


  it('1 555 555 5555 is valid', function(){
    expect(telephoneCheck('1 555 555 5555')).to.equal(true);
  });

});


