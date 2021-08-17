function noLogin() {
  if (
    localStorage.ID == null ||
    localStorage.ID == undefined ||
    localStorage.ID == "null" ||
    localStorage.ID == "undefined"
  ) {
    window.location.href = "./error.html";
  }
}
