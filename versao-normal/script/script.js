const translation = document.querySelector("#translation")
const en = document.querySelector("#en")
const pt = document.querySelector("#pt")
const enContent = document.getElementsByClassName("english")
const ptContent = document.getElementsByClassName("portuguese")
const switch1 = document.querySelector("#switch1")
const switch2 = document.querySelector("#switch2")
const page1 = document.querySelector("#page1")
const page2 = document.querySelector("#page2")
const footerh1 = document.querySelector("#footerh1")

switch1.addEventListener('click', () => {
  page1.classList.remove("changeLang")
  page2.classList.add("changeLang")
})

switch2.addEventListener('click', () => {
  page1.classList.add("changeLang")
  page2.classList.remove("changeLang")
})

pt.addEventListener('click', () => {
  enContent[0].classList.add("changeLang")
  enContent[1].classList.add("changeLang")
  ptContent[0].classList.remove("changeLang")
  ptContent[1].classList.remove("changeLang")
  pt.style.backgroundColor = 'green'
  pt.style.color = 'white'
  en.style.backgroundColor = 'white'
  en.style.color = 'black'
  footerh1.innerText = 'Equipe'
})

en.addEventListener('click', () => {
  enContent[0].classList.remove("changeLang")
  enContent[1].classList.remove("changeLang")
  ptContent[0].classList.add("changeLang")
  ptContent[1].classList.add("changeLang")
  en.style.backgroundColor = 'blue'
  en.style.color = 'white'
  pt.style.backgroundColor = 'white'
  pt.style.color = 'black'
  footerh1.innerText = 'Team'
})