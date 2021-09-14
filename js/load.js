fetch(`https://ge-employees.herokuapp.com/data/${subject}`)
  .then((data) => {
    return data.json();
  })
  .then((papers) => {
    papers.forEach((element) => {
      $(".papers").append(
        `<div class="grid-item-1"><a href = ${element.link} target="page">${element.subject} ${element.exam} Set ${element.set} (${element.type})</a></div><br>`
      );
    });
  });
