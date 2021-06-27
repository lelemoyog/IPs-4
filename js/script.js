function Order(crust, flavour, topping, size) {
    this.crust = crust;
    this.flavour = flavour;
    this.topping = topping;
    this.size = size;
}
Order.prototype.newOrder = function () {
    return "<li>" + this.crust + " </br>" + "<li>" + this.flavour + "</br> " + "<li>" + this.topping + " </br>" + "<li>" + this.size + "</li>" + "</br>"
}


function resetInputField() {
    $("input[name='group2']").val("");
    $("input[name='group1']").val("");
    $("input[name='group3']").val("");
    $("input[name='group4']").val("");
}



$(document).ready(function () {

    $('form#order').hide();
    $("div#appnd").hide();
    $("fieldset#large").hide();
    $("fieldset#regular").hide();
    $("fieldset#medium").hide();

    $("input#lag").click(function () {
        $("fieldset#large").toggle();
    })
    $("input#reg").click(function () {
        $("fieldset#regular").toggle();
    })
    $("input#med").click(function () {
        $("fieldset#medium").toggle();
    })

    $('button#btn,button#bttnn').click(function (event) {
        event.preventDefault();

        $('form#order').toggle()
    });

    $("button#btnn").click(function () {
        var location = prompt("what is your location?")
        alert("your order will be delivered to " + location)

        if (location == "ngara") {
            alert("your delivery fee is ksh: " + (0.2*150))
        } else if (location === "westlands") {
            alert("your delivery fee is ksh: " + (0.2*250))
        } else if (location === "southB") {
            alert("your delivery fee is ksh: " + (0.2*300))
        } else if (location === "other") {
            alert("your delivery fee is ksh: " + (0.2*700))
        } else {
            alert("you will be charged on delivery")
        }
    })
    $("button#bttn").click(function (event) {
        event.preventDefault();
        $("div#appnd").show();
        $('form#order').hide();
        document.body.scrollTop = 1;
        document.documentElement.scrollTop = 1;

        var inputcrust = $("input[name='group2']:checked").val();
        var inputflavour = $("input[name='group1']:checked").val();
        var inputtopping = $("input[name='group3']:checked").val();
        var inputsize = $("input[name='group4']:checked").val();
        var inputNoOfOrdes = $("input#nOd").val();
        var neworder = new Order(inputcrust, inputflavour, inputtopping, inputsize)


        $("#appededList").append(neworder.newOrder());

    })


});



