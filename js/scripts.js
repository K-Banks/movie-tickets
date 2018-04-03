var ticketTotal = 0;

function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.Price = function() {
  var priceReturn = 0;
  var ticketDetail = [];
  if (this.movie === "B-SAW") {
    priceReturn += 2;
  } else if (this.movie === "ReadyP2") {
    priceReturn += 8;
  } else if (this.movie === "ScottVsUni") {
    priceReturn += 5;
  }
  if (this.age <= 12) {
    priceReturn = priceReturn * 0.90;
    ticketDetail.push("Child");
  } else if (this.age >=65) {
    priceReturn = priceReturn * 0.75;
    ticketDetail.push("Senior");
  } else {
    ticketDetail.push("Adult");
  }
  if (this.time === "2:15") {
    priceReturn -= 0.5;
    ticketDetail.push(priceReturn);
    ticketDetail.push("Matinee");
  } else {
    ticketDetail.push(priceReturn)
  }
  return ticketDetail;
}

$(document).ready(function() {
  $("form.form1").submit(function(event) {
    event.preventDefault();
    var movie = $("select#movie").val();
    var time = $("input:radio[name=time]:checked").val();
    var age = parseInt($("input#age").val());
    var newTicket = new Ticket(movie, time, age);
    var ticketInfo = newTicket.Price();

    var ticketPrice = parseFloat(ticketInfo[1]);
    ticketTotal += ticketPrice;
    console.log(ticketTotal);
    var newTicketTotal = ticketTotal.toFixed(2);
    ticketPrice = ticketPrice.toFixed(2);

    $("#evening").text(ticketInfo[2]);
    $("#output").append("<li>$" + ticketPrice + "<p>" + newTicket.movie + ", "+ newTicket.time + ", "+ticketInfo[0]+"</p></li>");
    $("#totalOutput").text("$" + newTicketTotal);
  });
});
