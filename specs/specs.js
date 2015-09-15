describe("contact", function() {
  it('creates new contact with given properties', function () {
    var testContact = new Contact("Andrew", "Dang");
    expect(testContact.firstName).to.equal("Andrew");
    expect(testContact.lastName).to.equal("Dang");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to all contact", function () {
    var testContact = new Contact("Michael", "Summers");
    expect(testContact.fullName()).to.equal("Michael Summers");
  });
});

describe('Address', function () {
  it('creates a new address with the given specs', function() {
    var testAddress = new Address("123 Main St", "Test City", "Test State");
    expect(testAddress.street).to.equal("123 Main St");
    expect(testAddress.city).to.equal("Test City");
    expect(testAddress.state).to.equal("Test State");
  });

  it('adds the full address method to all addresses', function() {
    var testAddress = new Address("123 Main St", "Test City", "Test State");
    expect(testAddress.fullAddress()).to.equal("123 Main St, Test City, Test State");
  });
});
