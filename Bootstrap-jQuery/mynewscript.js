var emlPtt = /^(?:[A-Za-z0-9]+[._]?[A-Za-z0-9]+)+\@(?:[A-Za-z]+[0-9]*)(?:(\.\w+))+?(?:(?!\1)\.\w+)?$/m;
$(document).ready(function(){
    myanimation();
    $("#myclick").click(function(event){
        myanimation();
        $(".custom-control-label").css("color","green");
        $("input.form-control[id != 'email'][id != 'address2'][id != 'promo-code'], select").each(checkText);
        $("input.form-control[id != 'email'][id != 'address2'][id != 'promo-code'], select").on("input",checkText);
        $("#email").each(checkEmail);
        $("#email").on("input",checkEmail);
        event.preventDefault();
    });
});
function checkText(){
    var valtext = $(this).val().trim();
        $(this).parent().find(".invalid-feedback").toggleClass("d-block",valtext == "");
        $(this).toggleClass("form-valid",valtext != "");
        $(this).toggleClass("form-invalid",valtext == "");
}
function checkEmail(){
    var emltext = $(this).val().trim();
    $(this).parent().find(".invalid-feedback").toggleClass("d-block",!emlPtt.test(emltext));
    $(this).toggleClass("form-valid",emlPtt.test(emltext));
    $(this).toggleClass("form-invalid",!emlPtt.test(emltext));
}
function myanimation(){
    $("body").css({"opacity" : '0'});
    $("body").animate({
        opacity : '1'
    },500);
}