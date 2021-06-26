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
    })

    
});



