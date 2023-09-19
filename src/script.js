let project_data;

document.body.onload = async () => {
  project_data = await fetch("./Project.json")
    .then((response) => response.json())
    .then((data) => data);

  let projects = [];

  for (let project of project_data) {
    projects.push(
      await create_project_tile(
        project.Name,
        project.Description,
        project.Image,
        project.Links
      )
    );
  }
  console.log(projects);

  document.getElementsByTagName("main")[0].innerHTML = projects.join("");
};

async function create_project_tile(name, description, image, links) {
  let out = "";

  await fetch(image)
    .then((response) => {
      if (response.ok) {
        out += `<div class="container" style="background-image: url("${image}") >`;
      }
    })
    .catch((error) => {
      out += `<div class="container">`;
    });
  out += "<article>";
  out += `<h2>${name}</h2>`;
  out += `<p>${description}</p>`;
  out += "<div>";
  for (let link of Object.keys(links)) {
    out += `<a href="${links[link]}">${link}</a>`;
  }
  out += "</div>";
  out += "</article>";
  out += "</div>";

  return out;
}
