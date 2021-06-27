$(document).ready(function () {
    $("button#bttn").click(function (event) {
        event.preventDefault();

        var inputcrust = $("input[name='group2']:checked").val();
        var inputflavour = $("input[name='group1']:checked").val();
        var inputtopping = $("input[name='group3']:checked").val();
        var inputsize = $("input[name='group4']:checked").val();
        var inputNoOfOrdes = $("input#nOd").val();
        console.log(inputsize)
        console.log(inputtopping)

        if (inputcrust == "Crispy" && inputsize == "Large") {
            if (inputtopping == "Mozzarella") {
                $("#appendedprice").append("ksh:" + (1500 + 600 + 100) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Feta cheese") {
                $("#appendedprice").append("ksh:" + (1500 + 450 + 100) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Pineapple") {
                $("#appendedprice").append("ksh:" + (1500 + 300 + 100) * inputNoOfOrdes + "</br> ")
            }
        } else if (inputcrust == "Crispy" && inputsize == "Regular") {
            if (inputtopping == "Mozzarella") {
                $("#appendedprice").append("ksh:" + (600 + 250 + 100) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Feta cheese") {
                $("#appendedprice").append("ksh:" + (600 + 150 + 100) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Pineapple") {
                $("#appendedprice").append("ksh:" + (600 + 50 + 100) * inputNoOfOrdes + "</br> ")
            }
        } else if (inputcrust == "Crispy" && inputsize == "Medium") {
            if (inputtopping == "Mozzarella") {
                $("#appendedprice").append("ksh:" + (1000 + 450 + 100) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Feta cheese") {
                $("#appendedprice").append("ksh:" + (1000 + 300 + 100) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Pineapple") {
                $("#appendedprice").append("ksh:" + (1000 + 150 + 100) * inputNoOfOrdes + "</br> ")
            }
        } else if (inputcrust == "Stuffed" && inputsize == "Large") {
            if (inputtopping == "Mozzarella") {
                $("#appendedprice").append("ksh:" + (1500 + 600 + 150) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Feta cheese") {
                $("#appendedprice").append("ksh:" + (1500 + 450 + 150) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Pineapple") {
                $("#appendedprice").append("ksh:" + (1500 + 300 + 150) * inputNoOfOrdes + "</br> ")
            }
        } else if (inputcrust == "Stuffed" && inputsize == "Regular") {
            if (inputtopping == "Mozzarella") {
                $("#appendedprice").append("ksh:" + (600 + 250 + 150) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Feta cheese") {
                $("#appendedprice").append("ksh:" + (600 + 150 + 150) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Pineapple") {
                $("#appendedprice").append("ksh:" + (600 + 50 + 150) * inputNoOfOrdes + "</br> ")
            }
        } else if (inputcrust == "Stuffed" && inputsize == "Medium") {
            if (inputtopping == "Mozzarella") {
                $("#appendedprice").append("ksh:" + (1000 + 450 + 150) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Feta cheese") {
                $("#appendedprice").append("ksh:" + (1000 + 300 + 150) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Pineapple") {
                $("#appendedprice").append("ksh:" + (1000 + 150 + 150) * inputNoOfOrdes + "</br> ")
            }
        } else if (inputcrust == "Gluten-free" && inputsize == "Large") {
            if (inputtopping == "Mozzarella") {
                $("#appendedprice").append("ksh:" + (1500 + 600 + 200) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Feta cheese") {
                $("#appendedprice").append("ksh:" + (1500 + 450 + 200) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Pineapple") {
                $("#appendedprice").append("ksh:" + (1500 + 300 + 200) * inputNoOfOrdes + "</br> ")
            }
        } else if (inputcrust == "Gluten-free" && inputsize == "Regular") {
            if (inputtopping == "Mozzarella") {
                $("#appendedprice").append("ksh:" + (600 + 250 + 200) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Feta cheese") {
                $("#appendedprice").append("ksh:" + (600 + 150 + 200) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Pineapple") {
                $("#appendedprice").append("ksh:" + (600 + 50 + 200) * inputNoOfOrdes + "</br> ")
            }
        } else if (inputcrust == "Gluten-free" && inputsize == "Medium") {
            if (inputtopping == "Mozzarella") {
                $("#appendedprice").append("ksh:" + (1000 + 450 + 150) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Feta cheese") {
                $("#appendedprice").append("ksh:" + (1000 + 300 + 150) * inputNoOfOrdes + "</br> ")
            } else if (inputtopping == "Pineapple") {
                $("#appendedprice").append("ksh:" + (1000 + 150 + 150) * inputNoOfOrdes + "</br> ")
            }
        }

    });
})