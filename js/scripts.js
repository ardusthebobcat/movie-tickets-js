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

$(document).ready(function() {
  $("form#movie-ticket").submit(function(event) {
    event.preventDefault();

    var selectedMovie = $("select#movie").val();
    var selectedTime = $("select#time").val();
    var selectedAge = $("input#age").val();
    var newTicket = new Ticket(selectedMovie, selectedTime, selectedAge);

    $(".result").toggle();
    $(".ticket-cost").text(newTicket.ticketCost());

  });
});
