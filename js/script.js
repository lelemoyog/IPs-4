$(document).ready(function(){
   
    $('form#order').hide (); 
    $("div#appnd").hide();

    $('button#btn').click(function(event){
         event.preventDefault();

        $('form#order').toggle()
    });
    $("button#bttn").click(function(event){
        event.preventDefault();
        $("div#appnd").toggle()

         var crust =$("input[name='group2']:checked").val();
         var flavour =$("input[name='group1']:checked").val();
         var topping =$("input[name='group3']:checked").val();
         var size =$("input[name='group4']:checked").val();




         console.log(crust);
         console.log(flavour);
          console.log(topping);
         console.log(size);


           })

    
   

});



