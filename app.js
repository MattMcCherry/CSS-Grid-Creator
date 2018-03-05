( function() { 
    
    
    const folder = "images/";

    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                    $("#container").append( `<div class="gridItem"><img src="${val}" class="overlay"></div>` );
                } 
            });
        }
    });
    
    
    
    
}());