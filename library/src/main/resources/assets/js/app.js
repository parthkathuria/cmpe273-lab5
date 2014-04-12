$(document).ready(function(){
    var items = $('td[title="status"]');
    for( i=0; i<items.length; i++ ){
            var status = items[i].innerHTML;
            var isbn = items[i].id.slice("6");
            var buttonID = "button#"+isbn;
            if(status == "lost")
                    {
                            $(buttonID).attr("disabled",true);
                    }
            else{
                    $(buttonID).removeAttr("disabled");
            }
    }
    
});

$(":button").click(function() {
    var isbn = this.id;
    var status = "{{status}}";
    //alert('About to report lost on ISBN ' + isbn);
    if(confirm('About to report lost on ISBN ' + isbn + '\nConfirm?')){
    	$.ajax({
        	url: "/library/v1/books/"+isbn+"?status=lost",
        	type: "PUT",
        	contentType: "application/json",
        });
	    window.location.reload(true);
    }
        
});