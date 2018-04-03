function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.Price = function() {
  var priceReturn = 0;
  if (this.movie === "SAW") {
    priceReturn += 2;
  } else if (this.movie === "rdyp1") {
    priceReturn += 8;
  } else if (this.movie === "Scott") {
    priceReturn += 5;
  }
  if (this.time === "2:15") {
    priceReturn -= 0.5;
  }
  if (this.age <= 12) {
    priceReturn = priceReturn * 0.90;
  } else if (this.age >=65) {
    priceReturn = priceReturn * 0.75;
  }
  return  priceReturn
}

$(document).ready(function() {
  $("form.form1").submit(function(event) {
    event.preventDefault();
    var movie = $("select#movie").val();
    var time = $("input:radio[name=time]:checked").val();
    var age = parseInt($("input#age").val());

    var newTicket = new Ticket(movie, time, age);
    var ticketPrice = newTicket.Price();
    ticketPrice = ticketPrice.toFixed(2);
    // var newPrice = Math.round(ticketPrice*100.0)/100.0;

    $("#output").prepend("<li>$" + ticketPrice + "</li>");
  });
});
