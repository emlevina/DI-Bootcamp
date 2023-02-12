const translations = {
  eng: {
    firstname: 'Ekaterina',
    surname: 'Orlova',
    desc1: 'Mother, developer, ',
    desc2: 'huge ',
    frozen: 'Frozen',
    desc3: ' fan'
  },
  rus: {
    firstname: 'Екатерина',
    surname: 'Орлова',
    desc1: 'Мать, разработчица, ',
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

const languages = ['Russian', 'Hebrew', 'English'];
const skills = ['CSS/HTML', 'JavaScript', 'Node.js', 'React'];

const langList = document.getElementById('lang-list')
const skillsList = document.getElementById('skills-list')
const mainText = document.getElementById('main-text')

const changeLanguage = (e) => {
  location.hash = e.target.id;
  location.reload();
}

let lang = window.location.hash.slice(1)
lang = translations[lang] ? lang : 'eng'

const createMain = () => {
  const h1 = document.createElement('h1')
  const p = document.createElement('p')

  for (let id in translations['eng']) {
    const el = document.createElement('span')
    el.setAttribute('id', id)

    if (id === 'firstname' || id === 'surname') {
      h1.append(el)
    } else {
      p.append(el)
    }

    if (id === 'firstname' || id === 'frozen') {
      el.classList.add('text-accent')
    }
  }
  mainText.append(h1, p)
}

createMain()

for (let id in translations[lang]) {
  document.querySelector(`#${id}`).textContent = translations[lang][id];
}


languages.forEach(lang => {
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.append(lang)
  a.setAttribute('id', lang.toLowerCase().slice(0, 3))
  a.setAttribute('href', "#about")
  a.addEventListener('click', changeLanguage)
  li.append(a)
  langList.append(li)
})

skills.forEach(skill => {
  const li = document.createElement('li')
  li.append(skill)
  skillsList.append(li)
})