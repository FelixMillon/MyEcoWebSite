const user_stories = document.getElementById("user_stories");
const alternance = document.getElementById("alternance");
const cnaf = document.getElementById("cnaf");
fetch("./assets/data/questions.json", {
    method: "GET",
    headers: {
        Accept: "application/json",
    },
})
.then((response) => response.json())  
.then((data) => {
    Object.keys(data.Question_1).forEach((category) => {
        user_stories.innerHTML += `<h3>${category} :</h3>`;
        data.Question_1[category].forEach((item) => {
            user_stories.innerHTML += `<p>${item}</p>`;
        });
    });
    const question2 = data.Question_2;
    alternance.innerHTML += `<h3>Ma participation dans mon alternance :</h3>`;
    alternance.innerHTML += `<p>${question2.Presentation.Presentation}</p>`;
    alternance.innerHTML += `<ul>`;
    question2.Presentation.Arguments.forEach((argument) => {
      alternance.innerHTML += `<li>${argument}</li>`;
    });
    const question3 = data.Question_3;
    cnaf.innerHTML += `</ul>`;
    cnaf.innerHTML += `<h3>Actuellement :</h3>`;
    cnaf.innerHTML += `<p>${question3.Actuellement.Presentation}</p>`;
    cnaf.innerHTML += `<ul>`;
    question3.Actuellement.Arguments.forEach((argument) => {
      cnaf.innerHTML += `<li>${argument}</li>`;
    });
    cnaf.innerHTML += `</ul>`;
    cnaf.innerHTML += `<h3>Futur :</h3>`;
    cnaf.innerHTML += `<p>${question3.Futur.Presentation}</p>`;
});
