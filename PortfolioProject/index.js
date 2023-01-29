function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

let language = {
  eng: {
    firstname: 'Ekaterina',
    surname: 'Orlova',
    desc1: 'Mother, developer,',
    desc2: 'huge ',
    frozen: 'Frozen',
    desc3: ' fan'
  },
  rus: {
    firstname: 'Екатерина',
    surname: 'Орлова',
    desc1: 'Мать, разработчица,', 
    desc2: 'фанат ',
    frozen: 'Холодного сердца',
    desc3: ''
  },
  heb: {
    firstname: 'יקטרינה',
    surname: 'אורלוב',
    desc1: 'אמא, מתכנתת,', 
    desc2: 'מעריצה ענקית של',
    frozen: 'פרוזן ',
    desc3: ''
  }
};

if (window.location.hash) {
  let lang = window.location.hash.slice(1)
  if (["#rus", "#heb", "#eng"].includes(window.location.hash)) {
    for(id in language[lang]){
      console.log(language[lang][id])
      document.querySelector(`#${id}`).textContent = language[lang][id];
    }
  }
}
