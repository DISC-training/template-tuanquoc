
   

function myFunction(){
    var submit = document.querySelector("input[type='submit']");
    submit.disabled = true;
    /* Set all input object will change. 12
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var address = document.getElementById("address");
    var country = document.forms["form1"]["country"];
    var state = document.forms["form2"]["state"];
    var zip = document.forms["form3"]["zip"];
    var nameoncard = document.getElementById("nameoncard");
    var creditnumber = document.getElementById("creditnumber");
    var expiration = document.getElementById("expiration");
    var cvv = document.getElementById("cvv");

    // Set all display error object
    var fname_error = document.getElementById("fname_error");
    var lname_error = document.getElementById("lname_error");
    var uname_error = document.getElementById("uname_error");
    var email_error = document.getElementById("email_error");
    var address_error = document.getElementById("address_error");
    var country_error = document.getElementById("country_error");
    var state_error = document.getElementById("state_error");
    */
    
    //Set all display error object
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
   // For input = "text"
   for (var i = 0, j = 0; i < x.length; i++, j++)
   {
       if (x[i].value == "")
       {
           if (x[i] == document.getElementById("promo-code") || x[i].name == "address2")
           {
               j--;
               continue;
           }
            x[i].style.border = "1px solid red";
            var ndiv = document.createElement("div");
            // Add a invalid message
            var node = document.createTextNode(mes_text[j]);
            ndiv.appendChild(node);
            x[i].parentNode.appendChild(ndiv);
            ndiv.style.color = "red";
            ndiv.style.fontSize = "1vw";
       }
       else 
       {
           x[i].style.border = "1px solid green";
       }
   }
   // For input = "email"


   // For selected elements
   var mes_selected = [
       "Please select a valid country.",
       "Please provide a valid state."
   ];
   var select = document.querySelectorAll("select");
   var option = select.childNotes;
   var chosen;
   for (var i = 0; i < option.length; i++)
   {
       if (option[i].checked == true)
       {
           if (option[i].value == "Choose...")
           {
               var ndiv = document.createElement("div");
               var node = document.createTextNode(mes_selected[i]);
               ndiv.appendChild(node);
               option[i].parentNode.appendChild(ndiv);
               ndiv.style.color = "red";
               ndiv.style.fontSize = "1vw";
           }
       }
   }
   for (var i = 0; i < select.length; i++)
   {
        for (var j = 0; j <)
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

function myFocusFuntion(val){
    val.style.background = "green";
}
function myinputChange(){
    this.style.border = "1px solid green";
}