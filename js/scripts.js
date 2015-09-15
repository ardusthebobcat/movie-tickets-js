function Ticket(movieName, timeOfDay, age) {
  this.movieName = movieName;
  this.timeOfDay = timeOfDay;
  this.age = age;
}

Ticket.prototype.ticketCost = function() {
  var cost = 0;

  if (this.timeOfDay < 16) {
    cost = 6;
  } else {
    cost = 10;
  }

  if (this.age > 65 || this.age < 15) {
    cost = cost - 2;
  }

  return cost;

}
