async function check() {
  // Selecting the input element and get its value
  let username = document.getElementById("inputId").value;
  let password = document.getElementById("password").value;
  try {
    let response = await fetch(
      "https://ge-employees.herokuapp.com/authenticate?type=members",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usr_name: username,
          pwd: password,
        }),
      }
    ).then((res) => {
      return res.json();
    });

    if (response.message == "Authenticated") {
      localStorage.ID = username;
      window.location.href = "./Home-Page.html";
    } else {
      alert("Invalid Login ID and Password");
    }
  } catch (err) {
    console.error(err);
    alert(
      "Oops. there seems to be some error with our systems. Please contact the devs"
    );
  }

  // /*

  // jsonToPost = {
  //   usr_name: a,
  //   pwd: b,
  // };
  // fetch("https://ge-employees.herokuapp.com/authenticate", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(jsonToPost),
  // })
  // */
  // if (a == "Grasp_Excellence_Members" && b == "AdminOnly3") {
  //   localStorage.ID = a;
  //   window.location.href = "Home Page.html";
  // } else if (a == "Grasp_Excellence_Members" && b == "Ashaz.O") {
  //   localStorage.ID = a;
  //   window.location.href = "Home Page.html";
  // } else if (a == "Grasp_Excellence_Members" && b == "Harsha.J") {
  //   localStorage.ID = a;
  //   window.location.href = "Home Page.html";
  // } else if (a == "Grasp_Excellence_Members" && b == "Krish.N") {
  //   localStorage.ID = a;
  //   window.location.href = "Home Page.html";
  // } else if (a == "Grasp_Excellence_Members" && b == "Satvik.G") {
  //   localStorage.ID = a;
  //   window.location.href = "Home Page.html";
  // } else if (a == "Me nub you pro" && b == "haha lol noone knows my password") {
  //   localStorage.ID = a;
  //   window.location.href = "Home Page.html";
  // } else if (a == "Grasp_Excellence_Members" && b == "Shiv.G") {
  //   localStorage.ID = a;
  //   window.location.href = "Home Page.html";
  // } else if (a == "Grasp_Excellence_Members" && b == "Harish.S") {
  //   localStorage.ID = a;
  //   window.location.href = "Home Page.html";
  // } else if (a == "Grasp_Excellence_Members" && b == "Vishal") {
  //   localStorage.ID = a;
  //   window.location.href = "Home Page.html";
  // } else if (a == "Grasp_Excellence_Members" && b == "Aharnish") {
  //   localStorage.ID = a;
  //   window.location.href = "Home Page.html";
  // } else if (a == "Grasp_Excellence_Members" && b == "Ritwik") {
  //   localStorage.ID = a;
  //   window.location.href = "Home Page.html";
  // } else if (a == "Grasp_Excellence_Members" && b == "Soumil") {
  //   localStorage.ID = a;
  //   window.location.href = "Home Page.html";
  // } else if (a == "Grasp_Excellence_Members" && b == "Sujal") {
  //   localStorage.ID = a;
  //   window.location.href = "Home Page.html";
  // } else if (a == "Grasp_Excellence_Members" && b == "Harihar") {
  //   localStorage.ID = a;
  //   window.location.href = "Home Page.html";
  // } else if (a == "Grasp_Excellence_Members" && b == "Harshavardhan") {
  //   localStorage.ID = a;
  //   window.location.href = "Home Page.html";
  // } else if (a == "Grasp_Excellence_Members" && b == "Abhinav") {
  //   localStorage.ID = a;
  //   window.location.href = "Home Page.html";
  // } else if (a == "Grasp_Excellence_Members" && b == "Shourya") {
  //   localStorage.ID = a;
  //   window.location.href = "Home Page.html";
  // } else
  //   alert("You are not a member, please contact an admin for further queries.");
}
