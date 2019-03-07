$(document).ready(function(){
    myanimation();
    $("#mysubmit").submit(function(event){
        myanimation();
        if($("input.form-control[id != 'email'][id != 'promo-code']").val().trim() == ""){
            $(".custom-control-label").css("color","green");
            messageUser();
            $(this).on("input",messageUser);
            event.preventDefault();
        }
        else{
            return;
        } 
    });
});
function messageUser(){
    // *INPUT-TEXT && SELECT
    $("input.form-control, select").each(function(i,e){
        if(e.name == "email" || e.name == "promo-code" || e.name == "address2"){
            return;
        }
        if($(e).val().trim() == ""){
            $(e).parent().find(".invalid-feedback").show();
            $(e).removeClass("form-valid");
            $(e).toggleClass("form-invalid",true);
        }
        else{
            $(e).parent().find(".invalid-feedback").hide();
            $(e).removeClass("form-invalid");
            $(e).toggleClass("form-valid",true);
        } 
    });
    // *EMAIL
    var emlPtt = /\b(?:[A-Za-z0-9]+[._]?[A-Za-z0-9]+)+\@(?:[A-Za-z]+[0-9]*)(?:(\.\w+))+?(?:(?!\1)\.\w+)?\b/;
    var emlVal = $("#email").val().trim();
    if (emlPtt.test(emlVal)){
        var obj = emlPtt.exec(emlVal);
        if (obj[0] == obj.input){
            $("#email").parent().find(".invalid-feedback").hide();
            $("#email").removeClass("form-invalid");
            $("#email").toggleClass("form-valid",true);
        }
        else{
            $("#email").parent().find(".invalid-feedback").show();
            $("#email").removeClass("form-valid");
            $("#email").toggleClass("form-invalid",true);
        }
    }
    else{
        $("#email").parent().find(".invalid-feedback").show();
            $("#email").removeClass("form-valid");
            $("#email").toggleClass("form-invalid",true);
    }
}
function myanimation(){
    $("body").css({"opacity" : '0'});
    $("body").animate({
        opacity : '1'
    },500);
}