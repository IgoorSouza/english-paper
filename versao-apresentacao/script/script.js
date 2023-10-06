const close = document.querySelector("#close")
const presentation = document.querySelector("#blur")
const group = document.querySelector("#presentation")
const translation = document.querySelector("#translation")
const en = document.querySelector("#en")
const pt = document.querySelector("#pt")
const enContent = document.querySelector("#english")
const ptContent = document.querySelector("#portuguese")
const video = document.querySelector("video")
const confetti = document.querySelector("#confetti")
const gif = document.querySelector("img[alt='confetti']")
const transition = document.querySelector("#transition")
const footerh1 = document.querySelector("#footerh1")

video.addEventListener('click', () => {
  video.currentTime = 1.2
  video.play()
  setTimeout(() => {
    video.style.display = 'none'
    transition.style.animationName = 'changeColor'
  }, 4000)
  setTimeout(deleteTransition, 5000)
})

function deleteTransition() {
  transition.style.display = 'none'
}

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
  footerh1.innerText = 'Equipe'
  confetti.innerText = 'Confete!'
})

en.addEventListener('click', () => {
  ptContent.classList.add("changeLang")
  enContent.classList.remove("changeLang")
  en.style.backgroundColor = 'blue'
  en.style.color = 'white'
  pt.style.backgroundColor = 'white'
  pt.style.color = 'black'
  footerh1.innerText = 'Team'
  confetti.innerText = 'Confetti!'
})

confetti.addEventListener('click', () => {
  gif.style.display = 'inline-block'
  setTimeout(() => {
    gif.style.display = 'none'
  } , 12000)
})