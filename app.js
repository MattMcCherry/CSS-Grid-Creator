( function() { 
    
    // change to location of your images, the AJAX will pull them the rest
    const folder = "images/";

    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                    $("#imgContainer").append( `<div class="gridItem"><img src="${val}" class="overlay"></div>` );
                } 
            });
        }
    });  
    
    $(document).ready(function () {
        $(document).on("click", ".gridItem", function()  {
                if ($(this).hasClass("big")) {
                    $(this).removeClass("big");
                } else if ($(this).hasClass("vertical")) {
                    $(this).addClass("big");
                    $(this).removeClass("vertical");
                } else if ($(this).hasClass("horizontal")) {
                    $(this).addClass("vertical");
                    $(this).removeClass("horizontal");
                } else {
                    $(this).addClass("horizontal");
                }
            });   
        });
       
}());