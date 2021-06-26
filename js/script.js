function Order(crust ,flavour ,topping ,size){
    this.crust = crust;
    this.flavour= flavour;
    this.topping= topping;
    this.size= size;
}
Order.prototype.newOrder= function(){
    return "<li>"+this.crust + " </br>"+"<li>"+this.flavour+ "</br> "+"<li>"+this.topping + " </br>"+"<li>"+this.size +"</li>"
}
function PriceToppings(mozzarella,fetaCheese ,pineapple){
    this.mozzarella=250;
    this.fetaCheese=150;
    this.pineapple=50;
}




$(document).ready(function(){
   
    $('form#order').hide (); 
    $("div#appnd").hide();

    $('button#btn').click(function(event){
         event.preventDefault();

        $('form#order').toggle()
    });
    $("button#bttn,button#bttnn").click(function(event){
        event.preventDefault();
        $("div#appnd").toggle()

         var inputcrust =$("input[name='group2']:checked").val();
         var inputflavour =$("input[name='group1']:checked").val();
         var inputtopping =$("input[name='group3']:checked").val();
         var inputsize =$("input[name='group4']:checked").val();
          
         var neworder = new Order(inputcrust,inputflavour,inputtopping,inputsize )
        $("#appededList").append(neworder.newOrder());
        console.log(neworder)





        //  console.log(crust);
        //  console.log(flavour);
        //   console.log(topping);
        //  console.log(size);


           })

    
   

});



