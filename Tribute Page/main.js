const articleCareer = careerContent;
const articleManager = managerCarrer;
const articleEarlylife = earlyLife;

const earlyLifeElement = document.querySelector("#earlylife");
const careerElement = document.querySelector("#career");
const managerElement = document.querySelector("#manager");

//Add earlylife article
earlyLifeElement.innerHTML = "";
const {title, content} = articleEarlylife;

const addEralyLifeArticle = document.createElement("article");
addEralyLifeArticle.innerHTML = `
<h3>${title}</h3>
<hr>
<p>${content}</p>`;

earlyLifeElement.appendChild(addEralyLifeArticle);

//Add Career Article

careerElement.innerHTML = "<h3>Playing Career<h3><hr>";
articleCareer.forEach(career => {
    const {title, content} = career;

    const addCareerElement = document.createElement("article");
    addCareerElement.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>`;

    careerElement.appendChild(addCareerElement);
});

//Add Manager Article

managerElement.innerHTML = "<h3>Managerial Career</h3><hr>";
articleManager.forEach(manager => {
    const {title, content} = manager;

    const addManagerElement = document.createElement("article");
    addManagerElement.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>`;

    managerElement.appendChild(addManagerElement);

});