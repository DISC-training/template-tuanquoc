//  REMEMBER ALL SUBMIT RIGHT FUNCTION
function myAnimation(){
    //Make loading page animation
    var loader = document.getElementById("body");
    loader.style.opacity = "0";
    var opa = 0;
    var myanimate = setInterval(loading,100);
    function loading(){
        if (opa == 0.7){
            loader.style.opacity = "1";
            clearInterval(myanimate);
        }
        else{
            opa = opa + 0.1;
            loader.style.opacity = opa; 
            //loader.style.transform = 'translateY('+0+')'  ;
        }
    }
}
function checkValid(){
    var flat = 1;
    //Check Input
    var subform = document.getElementById("subform");
    var myInput = document.querySelectorAll("input[type='text']");
    var ptt_text = /\b\s*\w+.*\b/;
    for (var i = 0; i < myInput.length; i++){
            if (!(ptt_text.test(myInput[i].value)))
            {
                flat = 0;
                break;
            }
    }
    //Check Email
    var myEmail = document.getElementById("email");
    var ptt_email = /\b(?:[A-Za-z0-9]+[._]?[A-Za-z0-9]+)+\@(?:[A-Za-z]+[0-9]*)(?:(\.\w+))+?(?:(?!\1)\.\w+)?\b/;
    if (ptt_email.test(myEmail.value)){
        var obj = ptt_email.exec(myEmail.value);
        if (!(obj.index == 0 && obj[0] == obj.input)){
            flat = 0;
        }    
    }
    else{
        flat  = 0;
    }
    //Check Select
    var slc = document.getElementsByTagName("select");
    for (var i = 0; i < slc.length; i++){
        var temp = slc[i].selectedIndex;
        var test = slc[i].options[temp].value;
        if (test == "Choose..."){
            flat = 0;
            break;
        }
    }
    if(flat == 0){
        myFunction();
        return false;
    }
    else{
        return true;
    }
}
function myFunction(){
    myAnimation();
    //Set address2 always green
    var address2 = document.getElementById("address2");
    address2.style.border = "1px solid green";
    address2.onfocus = function(){
        this.style.boxShadow = "0 0 0 .2rem rgba(2, 241, 62, 0.25)";
    }
    //Set label elements green
    var checkmark = document.getElementsByClassName("checkmark");
    for (var i = 0; i < checkmark.length; i++) {
        checkmark[i].style.border = "1px solid green";
        checkmark[i].parentNode.style.color = "green";
    }
    var radiomark = document.getElementsByClassName("radio-mark");
    for (var i = 0; i < radiomark.length; i++) {
        radiomark[i].style.border = "1px solid green";
        radiomark[i].parentNode.style.color = "green";
    }

    // ADD MESSAGE FOR INPUT TYPE = "TEXT"
    // Make objs input
    var myInput = document.querySelectorAll("input[type='text']");
    //Set first submit error
    for (var i = 0; i < myInput.length; i++){ 
        if (myInput[i].name == "address2" || myInput[i].name == "promo-code" || myInput[i].name == "email" ){
            continue;
        }
        else{
            var ptt_text = /\b\s*\w+.*\b/;
            var child = myInput[i].parentNode.lastElementChild;
            if (ptt_text.test(myInput[i].value)){
                myInput[i].style.border = "1px solid green";
                child.style.opacity = "0";
            }
            else{
                myInput[i].style.border = "1px solid red";
                child.style.opacity = "1";
            }
            
        }
        myInput[i].addEventListener("input",errorText);
        myInput[i].addEventListener("focus",errorText);
        myInput[i].addEventListener("blur",Blur);
    }
    //ADD MESSAGE FOR INPUT TYPE = "EMAIL"
    var myEmail = document.getElementById("email");
    mailFunc(myEmail);
    // ADD MESSAGE FOR SELECT
    var slc = document.getElementsByTagName("select");
    for (var i = 0; i < slc.length; i++){
        var temp = slc[i].selectedIndex;
        var test = slc[i].options[temp].value;
        var child = slc[i].parentNode.lastElementChild;
        if (test == "Choose..."){
            child.style.opacity = "1";
            slc[i].style.border = "1px solid red";
            slc[i].setAttribute("required","true");
            //slc[i].style.boxShadow = "0 0 0 .2rem rgba(235, 32, 6, 0.25)";
        }
        else{
            child.style.opacity = "0";
            slc[i].style.border = "1px solid green";
            slc[i].removeAttribute("required");
            //slc[i].style.boxShadow = "0 0 0 .2rem rgba(2, 241, 62, 0.25)";
        }
        slc[i].addEventListener("change",errorSelect);
        slc[i].addEventListener("blur",Blur);
    }
}

// HERE ARE METHODs FOR OBJECTs
// 1. INPUT
function errorText(){
    var val = this;
    var ptt_text = /\b\s*\w+.*\b/;
        var child = val.parentNode.lastElementChild;
        if (ptt_text.test(val.value)){
            val.style.border = "1px solid green";
            child.style.opacity = "0";
            //val.removeAttribute("required");
            val.style.boxShadow = "0 0 0 .2rem rgba(2, 241, 62, 0.25)";
        }
        else{
            val.style.border = "1px solid red";
            child.style.opacity = "1";
            //val.setAttribute("required","true");
            val.style.boxShadow = "0 0 0 .2rem rgba(235, 32, 6, 0.25)";
        }
}
 // 2. EMAIL
 function mailFunc(myEmail){
    var ptt_email = /\b(?:[A-Za-z0-9]+[._]?[A-Za-z0-9]+)+\@(?:[A-Za-z]+[0-9]*)(?:(\.\w+))+?(?:(?!\1)\.\w+)?\b/;
    var childmail = myEmail.parentNode.lastElementChild;
        if (ptt_email.test(myEmail.value)){
        var obj = ptt_email.exec(myEmail.value);
        if (obj.index == 0 && obj[0] == obj.input){
            // Right pattern
            myEmail.style.border = "1px solid green";
            childmail.style.opacity = "0";
        } 
        else{
            // Wrong pattern
            myEmail.style.border = "1px solid red";
            childmail.style.opacity = "1";
        }
    }
    else{
        // Wrong pattern
        myEmail.style.border = "1px solid red";
        childmail.style.opacity = "1";
    }
    myEmail.addEventListener("input",errorEmail);
    myEmail.addEventListener("focus",errorEmail);
    myEmail.addEventListener("blur",Blur);
 }
 function errorEmail(){
        var val = this;
        var ptt_email = /\b(?:[A-Za-z0-9]+[._]?[A-Za-z0-9]+)+\@(?:[A-Za-z]+[0-9]*)(?:(\.\w+))+?(?:(?!\1)\.\w+)?\b/;
        var child = val.parentNode.lastElementChild;
        if (ptt_email.test(val.value)){
            val.style.border = "1px solid green";
            child.style.opacity = "0";
            //val.removeAttribute("required");
            val.style.boxShadow = "0 0 0 .2rem rgba(2, 241, 62, 0.25)";
        }
        else{
            val.style.border = "1px solid red";
            child.style.opacity = "1";
            //val.setAttribute("required","true");
            val.style.boxShadow = "0 0 0 .2rem rgba(235, 32, 6, 0.25)";
        }
 }
 // 3.SELECT
 function errorSelect(){
    var val = this;
    var temp = val.selectedIndex;
    var test = val.options[temp].value;
    var child = val.parentNode.lastElementChild;
    if (test == "Choose..."){
        child.style.opacity = "1";
        val.style.border = "1px solid red";
        //val.setAttribute("required","true");
        val.style.boxShadow = "0 0 0 .2rem rgba(235, 32, 6, 0.25)";
    }
    else{
        child.style.opacity = "0";
        val.style.border = "1px solid green";
        //val.removeAttribute("required");
        val.style.boxShadow = "0 0 0 .2rem rgba(2, 241, 62, 0.25)";
    }
 }  
 // BLUR ALL ELEMENT
 function Blur(){
     this.style.boxShadow = "none";
 } 