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
        con.title = project.Title;
        con.style.backgroundImage = `url(${project.Image})`;
        con.classList.add('project');

        let inner = document.createElement('div');

        let title = document.createElement('h3');
        title.innerHTML = project.Title;
        inner.appendChild(title);

        let desc = document.createElement('p');
        desc.innerHTML = project.Description;
        inner.appendChild(desc);

        let links = document.createElement('ul');
        Object.keys(project.Links).forEach(key => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.innerText = key;
            a.href = project.Links[key];
            li.appendChild(a);
            links.appendChild(li);
        });
        inner.appendChild(links);

        con.appendChild(inner);
        projectDOM.appendChild(con);
    });
}

async function loadSocials() {
    let socialDOM = document.getElementById('socialList');

    Object.keys(data.Socials).forEach(key => {
        let a = document.createElement('a');
        a.title = key;
        a.href = data.Socials[key];
        a.innerText = key;
        socialDOM.appendChild(a);
    });
}

let data;
document.body.onload = async () => {
    data = await loadData();

    loadProjects();
    loadSocials();
}
