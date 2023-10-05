const translation = document.querySelector("#translation")
const en = document.querySelector("#en")
const pt = document.querySelector("#pt")
const enContent = document.querySelector("#english")
const ptContent = document.querySelector("#portuguese")

pt.addEventListener('click', () => {
  enContent.classList.add("changeLang")
  ptContent.classList.remove("changeLang")
  pt.style.backgroundColor = 'green'
  pt.style.color = 'white'
  en.style.backgroundColor = 'white'
  en.style.color = 'black'
})

en.addEventListener('click', () => {
  ptContent.classList.add("changeLang")
  enContent.classList.remove("changeLang")
  en.style.backgroundColor = 'blue'
  en.style.color = 'white'
  pt.style.backgroundColor = 'white'
  pt.style.color = 'black'
})