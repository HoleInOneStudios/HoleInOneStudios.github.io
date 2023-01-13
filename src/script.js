async function loadData() {
    return fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(err => {
        console.error(err);
    });
}

async function loadProjects() {
    let projectDOM = document.getElementById('projectListA');

    data.Projects.forEach(project => {

        let con = document.createElement('div');
        con.style.backgroundImage = `url(${project.Image})`;
        con.classList.add('project');

        let title = document.createElement('h3');
        title.innerHTML = project.Title;
        con.appendChild(title);

        let desc = document.createElement('p');
        desc.innerHTML = project.Description;
        con.appendChild(desc);

        let links = document.createElement('ul');
        Object.keys(project.Links).forEach(key => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.innerText = key;
            a.href = project.Links[key];
            li.appendChild(a);
            links.appendChild(li);
        });
        con.appendChild(links);

        projectDOM.appendChild(con);
    });
}

let data;
document.body.onload = async () => {
    data = await loadData();

    loadProjects();
}