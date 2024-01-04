function validation(event) {
  event.preventDefault();
  var email = $("#email").val();
  var password = $("#password").val();

  if (email === "" || email === null) {
    $("#email").css("border-color", "rgb(255, 183, 124)");
    $("#email").attr("placeholder", "Enter e-mail address.");

    if (password) {
      $("#password").css("border-color", "black");
    }
  }
  if (password === "" || password === null) {
    $("#password").css("border-color", "rgb(255, 183, 124)");
    $("#password").attr("placeholder", "Enter password.");
    if (email) {
      $("#email").css("border-color", "black");
    }
  }
  if (email && password) {
    window.location.assign("submitted.html");
  }
}

function fadeInOut() {}
$("#Submit").click(validation);
