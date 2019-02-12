
   

function myFunction(){
    var submit = document.querySelector("input[type='submit']");
    submit.disabled = true;
    // Set Address2 always "green"
    var address2 = document.getElementById("address2");
    address2.style.border = "1px solid green";
    // address2.onfocus = function(){
    //     address2.style.border = "3px solid lightgreen";
    // }
    // address2.onblur = function(){
    //     address2.style.border = "1px solid green";
    // }
    address2.addEventListener("focus", address2focus);
    address2.addEventListener("blur", address2blur);

   // For input = "text"
   var mes_text = [
    "Valid first name is required.",
    "Valid last name is required.",
    "Your username is required.",
    "Please enter your shipping address.",
    "Zip code required.",
    "Name on card is required",
    "Credit card number is required",
    "Expiration date required",
    "Security code required"
];
   var x = document.querySelectorAll("input[type='text']");
   for (var i = 0, j = 0; i < x.length; i++, j++)
   {
        if (x[i] == document.getElementById("promo-code") || x[i].name == "address2")
           {
               j--;
               continue;
           }
        var ndiv = document.createElement("div");
        // Add a invalid message
        var node = document.createTextNode(mes_text[j]);
        ndiv.appendChild(node);
        x[i].parentNode.appendChild(ndiv);
        ndiv.style.color = "red";
        ndiv.style.fontSize = "1vw";
        //x[i].setAttribute("oninput", "haveinputChange(this)");
        x[i].addEventListener("input", haveinputChange,true);
        x[i].addEventListener("input", noneinputChange);
        x[i].setAttribute("onfocus", "focusChange(this)");
        
        x[i].addEventListener("blur", blurnoneChange);
        x[i].addEventListener("blur", blurhaveChange);
        if (x[i].value == "")
        {
            x[i].style.border = "1px solid red";
        }
        else{
            x[i].style.border = "1px solid green";
        }

   }
   // For input = "email"
   var eml = document.getElementById("email");
   email(eml);

   // For selected elements
   var mes_selected = [
       "Please select a valid country.",
       "Please provide a valid state."
   ];

   var slct = document.getElementsByTagName("select");
   for (var i = 0; i < slct.length; i++)
   {
        var ndiv = document.createElement("div");
        var node = document.createTextNode(mes_selected[i]);
        ndiv.appendChild(node);
        slct[i].parentNode.appendChild(ndiv);
        ndiv.style.color = "red";
        ndiv.style.fontSize = "1vw";
        var temp = slct[i].selectedIndex;
        var test = slct[i].options[temp].value;
        slct[i].addEventListener("change", selectChange);   
        if (test == "Choose..."){
            ndiv.style.opacity = "1";
            slct[i].style.border = "1px solid red";
        }
        else
        {
            ndiv.style.opacity = "0";
            slct[i].style.border = "1px solid green";
        }
   }


   // For label elements
   var label = document.querySelectorAll("label");
   for (var i = 0; i < label.length; i++)
   {
       label[i].style.color = "green";
   }

    var checkmark = document.getElementsByClassName("checkmark");
    for (var i = 0; i < checkmark.length; i++)
    {
        checkmark[i].style.border = "1px solid green";
    }
   var radiomark = document.getElementsByClassName("radio-mark");
   for (var i = 0; i < radiomark.length; i++)
   {
       radiomark[i].style.border = "1px solid green";  
   }
}
// EVENT FUNCTION

// OF intput[text]
function haveinputChange(){
    if (this.value != "")
    {
        focusChange(this);
        var child = this.parentNode.lastChild;
        child.style.opacity = "0";
        var val = this;
        val.setAttribute("oninput", "noneinputChange(this)");
    }   
}
function noneinputChange(){
    if (this.value == "")
    { 
        focusChange(this);
        var temp = this.parentNode.lastChild;
        temp.style.opacity = "1";
        var val = this;
        val.setAttribute("oninput", "haveinputChange(this)");
    }
}
function focusChange(val){
    if (val.value == "")
    {
        val.style.border = "3px solid lightpink"; 
    }
    else
    {
        val.style.border = "3px solid lightgreen";
    }
}
function blurnoneChange(){
    if (this.value == "")
    {
        this.style.border = "1px solid red"; 
        this.setAttribute("onblur", "blurhaveChange(this)");
    }
}
function blurhaveChange(){
    if (this.value != "")
    {
        this.style.border = "1px solid green";
        this.setAttribute("onblur", "blurnoneChange(this)");
    }
}
// OF email
function email(eml){
    var ndiv = document.createElement("div");
    // Add a invalid message
    var node = document.createTextNode("Please enter a valid email address for shipping updates.");
    ndiv.appendChild(node);
    eml.parentNode.appendChild(ndiv);
    ndiv.style.color = "red";
    ndiv.style.fontSize = "1vw";
    eml.addEventListener("input", haveemlChange,true);
    eml.addEventListener("input", noneemlChange);
    eml.setAttribute("onfocus", "focusemlChange(this)");
        
    eml.addEventListener("blur", bluremlnoneChange);
    eml.addEventListener("blur", bluremlhaveChange);
    if (!eml.checkValidity())
    {
        eml.style.border = "1px solid red";
    }
    else{
        eml.style.border = "1px solid green";
        ndiv.style.opacity = "0";
    }
}

function haveemlChange(){
    if (this.checkValidity())
    {
        focusemlChange(this);
        var child = this.parentNode.lastChild;
        child.style.opacity = "0";
        var val = this;
        val.setAttribute("oninput", "noneemlChange(this)");
    }   
}
function noneemlChange(){
    if (!this.checkValidity())
    { 
        focusemlChange(this);
        var temp = this.parentNode.lastChild;
        temp.style.opacity = "1";
        var val = this;
        val.setAttribute("oninput", "haveemlChange(this)");
    }
}
function focusemlChange(val){
    if (!val.checkValidity())
    {
        val.style.border = "3px solid lightpink"; 
    }
    else
    {
        val.style.border = "3px solid lightgreen";
    }
}
function bluremlnoneChange(){
    if (!this.checkValidity())
    {
        this.style.border = "1px solid red"; 
        this.setAttribute("onblur", "bluremlhaveChange(this)");
    }
}
function bluremlhaveChange(){
    if (this.checkValidity())
    {
        this.style.border = "1px solid green";
        this.setAttribute("onblur", "bluremlnoneChange(this)");
    }
}


// OF address2
function address2focus(){
    this.style.border = "3px solid lightgreen";
}
function address2blur(){
    this.style.border = "1px solid green";
}
// OF select 
function selectChange(){
    var val = this;
    var test = val.options[val.selectedIndex].value;
    var temp = val.parentNode.lastChild;
    if (test == "Choose...")
    {
        temp.style.opacity = "1";
        val.style.border = "1px solid red";
    }
    else
    {
        temp.style.opacity = "0";
        val.style.border = "1px solid green";
    }
}