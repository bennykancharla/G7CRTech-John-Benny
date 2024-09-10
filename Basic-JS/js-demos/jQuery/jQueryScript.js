var app = (function(){

    $(".toggler").click(function(){
        $(this).next().slideToggle(500);
    }).css("cursor","pointer");

    $('li').click(function(){
        var id = $(this).attr("for");
        // console.log(id);
        $(`#${id}+section`).slideToggle(500)
    }).css("cursor", "pointer");
    
    return {
        onToggleAll : function(){
            $("p, ul, section").slideToggle(500);
          //  $("ul").slideToggle(500);
        },
        
       
        
    }
})();
