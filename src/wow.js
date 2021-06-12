function doStuff() {
  if (
    localStorage.bio == "null" ||
    localStorage.bio == undefined ||
    localStorage.bio == " "||
    localStorage.bio == ""||
    localStorage.bio == "undefined"
  ) {
    let something = prompt("Please enter your description.");
    localStorage.bio = something;
    document.getElementById("name").innerHTML = localStorage.name;
    document.getElementById("description").innerHTML = localStorage.getItem(
      "bio"
    );
  } else {
document.getElementById("name").innerHTML = localStorage.name;
document.getElementById("description").innerHTML = localStorage.bio;
  }
}

doStuff();
