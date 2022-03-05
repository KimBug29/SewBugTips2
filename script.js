//hambuger menu;
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

function contactUsFormValidate(form){

//var form1 = document.forms[form];
//alert("form1::"+form)
var contactName = document.getElementById("contactName").value;
var contactEmail = document.getElementById("contactEmail").value;

if(contactName == null || contactName == ''){
alert("Please provide your name");
return false;
}
if(contactEmail == null || contactEmail == ''){
alert("Please provide your Email");
return false;
}

return true;
//alert("Thank you "+contactName+" for contacting us. We will get back to you at "+contactEmail);

}

//newCodeForPhoneValidation-AsOfMarch2022
var phone_input = document.getElementById("contactPhone");

phone_input.addEventListener('input', () => {
  phone_input.setCustomValidity('');
  phone_input.checkValidity();
});

phone_input.addEventListener('invalid', () => {
  if(phone_input.value === '') {
    phone_input.setCustomValidity('Enter phone number!');
  } else {
    phone_input.setCustomValidity('Enter phone number in this format: 123-456-7890');
  }
});
//endNewCodeForPhoneValidation-KW


//newCodeForDateTime-AsOfMarch2022
function display_ct5() {
    var x = new Date()
    var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
    
    var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
    x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds() + ":" + ampm;
    document.getElementById('ct5').innerHTML = x1;
    display_c5();
     }
     function display_c5(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct5()',refresh)
    }
    display_c5()

//endNewCodeForDateTime-KW


function thanksFunction() {
const queryString = window.location.search;
//console.log(queryString);
//alert("in Thanks");
const urlParams = new URLSearchParams(queryString);
var urlContactName = urlParams.get('name');
var urlContactEmail = urlParams.get('email');
document.getElementById("thanksText").innerHTML = "Thank you <strong>"+urlContactName+"</strong> for your message. We will get back to you at "+urlContactEmail;
}
