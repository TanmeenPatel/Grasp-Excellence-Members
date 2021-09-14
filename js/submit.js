$(document).ready(() => {
    $("#submit").on("click", (event) => {
      var jsonToPost = {
        type: $("#type").val(),
        link: $("#link").val(),
        set: Number($("#set").val()),
        exam: $("#exam").val(),
        subject: $("#subject").val(),
      };
  
      $.post(
        "https://ge-employees.herokuapp.com/submit",
        jsonToPost,
        (response) => {
          if (response == "OK") {
            $("span").text("Paper uploaded successfully").addClass("success");
          } else {
            $("span")
              .text("Something went wrong. Contact @amazinglySK")
              .addClass("failure");
          }
        }
      ).fail(() => {
        alert("Check your links or contact the dev @amazinglySK");
      });
      event.preventDefault();
    });
  });
  