function validation(event) {
  event.preventDefault();
  var email = $("#email").val();
  var password = $("#password").val();

  if (email === "" || email === null) {
    $("#email")
      .css("display", "block")
      .css("border-color", "rgb(255, 183, 124)");
    if (password) {
      $("#password").css("border-color", "black");
    }
  }
  if (password === "" || password === null) {
    $("#password")
      .css("display", "block")
      .css("border-color", "rgb(255, 183, 124)");
    if (email) {
      $("#email").css("border-color", "black");
    }
  }
  if (email && password) {
    window.location.assign("submitted.html");
  }
}

$("#Submit").click(validation);
