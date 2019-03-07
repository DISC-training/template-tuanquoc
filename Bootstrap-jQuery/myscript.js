var colorInvalid = {
    "border":"1px solid red",
    "box-shadow":"0 0 0 .2rem rgba(220,53,69,.25)"};
var colorValid = {
    "border":"1px solid green",
    "box-shadow":"0 0 0 .2rem rgba(40,167,69,.25)"
}
function myanimation(){
    $("body").css({"opacity" : '0'});
    $("body").animate({
        opacity : '1'
    },500);
}
function checkValid(){
    myanimation();
    var flat = 1;
    // Check InputText
    $("input[type='text']").each(function(i,e){
        if(e.name == "address2" || e.name == "promo-code" || e.name == "email") return;
        if(checkinputText(e) == 0){
            flat = 0;
        }
        $(e).css({"box-shadow":"none"});
        $(e).on("focus",function(){checkinputText(e)});
        $(e).on("input",function(){checkinputText(e)});
        $(e).on("blur", function(){$(this).css({"box-shadow":"none"})});
    });
    // Check Email
    var email = document.getElementById("email");
    if(checkEmail(email) == 0){
        flat = 0;
    }

    $(email).on("input",function(){checkEmail(email)});

    // Check Select
    $("select").each(function(i,e){
        if(checkSelected(e) == 0){
            flat = 0;
        }
        $(e).css({"box-shadow":"none"});
        $(e).on("focus",function(){checkSelected(e)});
        $(e).on("input",function(){checkSelected(e)});
        $(e).on("blur", function(){$(this).css({"box-shadow":"none"})});
    });
    return flat;
}
function checkinputText(e){
    if (e.value.trim() == ""){
        $(e.parentNode.lastElementChild).show();
        $(e).css(colorInvalid);
        return 0;
    }
    else{
        $(e.parentNode.lastElementChild).hide();
        $(e).css(colorValid);
    }
}
function checkEmail(email){
    var ptt = /\b(?:[A-Za-z0-9]+[._]?[A-Za-z0-9]+)+\@(?:[A-Za-z]+[0-9]*)(?:(\.\w+))+?(?:(?!\1)\.\w+)?\b/;
    var emailUser = email.value.trim();
    if (ptt.test(emailUser)){
        var obj = ptt.exec(emailUser);
        if (obj.index == 0 && obj[0] == obj.input){
            $(email).next().hide();
            $(email).css(colorValid);
        }
        else{
            $(email).next().show();
            $(email).css(colorInvalid);
            return 0;
        }
    }
    else{
            $(email).next().show();
            $(email).css(colorInvalid);
            return 0;
    }
}
function checkSelected(e){
    var test = e.options[e.selectedIndex].value;
    if(test == ""){
        $(e).next().show();
        $(e).css(colorInvalid);
        return 0;
    }
    else{
        $(e).next().hide();
        $(e).css(colorValid);
    }
}


$(document).ready(function(){

    //Make animation
    myanimation();
    //Add onsubmit attribute
    $("#mysubmit").submit(function(event){
        if (checkValid()== 1){
            return ;
        }
        else{
            event.preventDefault();
        }
        
    });
});