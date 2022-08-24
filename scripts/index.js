const allLang = ['en', 'es', 'fr', 'ja', 'nl', 'ru', 'zh'];

function selectMonthly() {
    const month = document.getElementById("month");
    const annually = document.getElementById("annuall");
    const button = document.getElementById("link");

    annually.classList.remove("active");
    button.href = "https://apple.com/";
    return month.classList.add("active");

}

function selectAnnually() {
    const month = document.getElementById("month");
    const annually = document.getElementById("annuall");
    const button = document.getElementById("link");

    month.classList.remove("active");
    button.href = "https://google.com/";
    return annually.classList.add("active");
}

function changeLanguage() {
    const hash = window.location.search.substring(6);
    const userLang = navigator.language.slice(0, 2) || navigator.userLanguage.slice(0, 2); 
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + `?lang=${userLang}`;
    }
    for (let idx in lang) {
        let element = document.getElementById(idx);
        let optionBlock = document.getElementById("option")
        if (element) {
            element.classList.add(hash);
            optionBlock.classList.add(hash);
            element.innerHTML = lang[idx][hash]
        }
    }
}

changeLanguage();