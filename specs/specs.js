describe("ticket", function() {
  it('creates new contact with given properties', function () {
    var testTicket = new Ticket("Ex Machina", 10, 17);
    expect(testTicket.movieName).to.equal("Ex Machina");
    expect(testTicket.timeOfDay).to.equal(10);
    expect(testTicket.age).to.eql(17);
  });

  it("returns ticket cost based on age and time of day", function() {
    var testTicket = new Ticket("Ex Machina", 22, 17);
    expect(testTicket.ticketCost()).to.equal(10);
  });

});
