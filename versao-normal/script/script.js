const close = document.querySelector("#close")
const presentation = document.querySelector("#blur")
const group = document.querySelector("#presentation")
const translation = document.querySelector("#translation")
const en = document.querySelector("#en")
const pt = document.querySelector("#pt")
const enContent = document.querySelector("#english")
const ptContent = document.querySelector("#portuguese")

close.addEventListener('click', () => {
  group.setAttribute("id", "closePresentation")
  presentation.setAttribute("id", "closePresentation")
  document.querySelector("body").style.overflowY = 'scroll'
  translation.style.display = 'flex'
})

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