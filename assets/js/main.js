const button = document.getElementById("toggleButton");
const div = document.getElementById("myDiv");

button.addEventListener("click", function () {
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
});

const button1 = document.getElementById("toggleButton1");
const div1 = document.getElementById("myDiv1");

button1.addEventListener("click", function () {
  if (div1.style.display === "none") {
    div1.style.display = "block";
  } else {
    div1.style.display = "none";
  }
});

const button2 = document.getElementById("toggleButton2");
const div2 = document.getElementById("myDiv2");

button2.addEventListener("click", function () {
  if (div2.style.display === "none") {
    div2.style.display = "block";
  } else {
    div2.style.display = "none";
  }
});



function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var phone = document.forms["myForm"]["phone"].value;
            
    if (name === "") {
        alert("please enter name");
        return false;
    }
        
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
        alert("please enter email.");
        return false;
    }
    
    var phoneRegex = /^\d{11}$/;
    if (!phone.match(phoneRegex)) {
        alert("please enter phone.");
        return false;
    }

 }


