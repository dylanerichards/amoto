$(document).ready(function() {

  function validateEmail(email){
    var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    var valid = emailReg.test(email);

    if(!valid) {
      return false;
    } else {
      return true;
    }
  }

  $("#submit").click(function(e) {
    e.preventDefault();

    if(validateEmail($("#email").val()) === false) {
      alert("Please enter a valid email address.");
      return false;
    };

    if($("#password").val() == "") {
      alert("Password cannot be blank");
      return false;
    };

    window.location.href = "http://www.google.com";
    return false;
  });

});
