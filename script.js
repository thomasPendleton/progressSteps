const progress = document.getElementById('progress')
const circle = document.querySelectorAll('.circle')
const next = document.getElementById('next')
const prev = document.getElementById('prev')

let progressNum = 1

let w = 0

function addBlue() {
  circle.forEach((o, i) => {
    if (progressNum > i) {
      o.classList.add('active')
    } else {
      o.classList.remove('active')
    }
  })
}

function nextClick() {
  progressNum++
  w += 33
  progress.style.width = `${w}%`
  prev.removeAttribute('disabled')
  if (progressNum === 4) {
    next.setAttribute('disabled', 'disabled')
  }
  addBlue()
}
function prevClick() {
  progressNum--
  w -= 33
  progress.style.width = `${w}%`
  next.removeAttribute('disabled')
  if (progressNum === 1) {
    prev.setAttribute('disabled', 'disabled')
  }
  addBlue()
}

//event listeners
next.addEventListener('click', () => {
  nextClick()
})
prev.addEventListener('click', () => {
  prevClick()
})


//