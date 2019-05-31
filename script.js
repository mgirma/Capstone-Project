$("button").click(function(){
    var comment= $("input").val();
    $(".list").append("<li>"+comment+"</li>");
    
});
