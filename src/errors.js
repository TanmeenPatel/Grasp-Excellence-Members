function noLogin() {
  if (
    localStorage.name == null ||
    localStorage.name == undefined ||
    localStorage.name == "null" ||
    localStorage.name == "undefined"
  ) {
    window.location.href = "./error.html";
  }
}
