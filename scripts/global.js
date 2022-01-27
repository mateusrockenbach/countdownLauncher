// pega os elementos necessários
const modalWrapper = document.getElementById('modal-wrapper')
const closeButton = document.getElementById('close-button')
const button = document.getElementById('actions')

//remove classe modal ativo pelo clique
closeButton.onclick = function () {
    modalWrapper.classList.remove('modal-active')
}

//remove classe modal ativo pela tecla Esc
document.addEventListener('keydown', function (event) {
    const isEscKey = event.key === 'Escape'
    const modalWrapperIsActive = document.getElementsByClassName('modal-active')

    if(isEscKey && modalWrapperIsActive) {
        modalWrapper.classList.remove('modal-active')
    }})

//adiciona classe modal ativo pelo clique
button.onclick = function () {
    modalWrapper.classList.add('modal-active')
}


//COUNTDOWN FROM W3Schools.com
//////////////////////////////////////
// Set the date we're counting down to
const countDownDate = new Date('Dec 31, 2022 00:00:01').getTime();

// Update the count down every 1 second
  const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id='counter-timer'
//   document.getElementById('counter-timer').innerHTML = days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds;

  document.getElementsByClassName('time-div')[0].innerHTML = days + '<p>Days</p>'
  document.getElementsByClassName('time-div')[2].innerHTML = hours + '<p>Hours</p>'
  document.getElementsByClassName('time-div')[4].innerHTML = minutes + '<p>Minutes</p>'
  document.getElementsByClassName('time-div')[6].innerHTML = seconds + '<p>Seconds</p>'

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('counter-timer').innerHTML = 'Rocket arrived!';

// Hide unnecessary content after count down get do zero
    function hideData() {
        document.querySelector('.labels').style.display = 'none';
        document.querySelector('h2').style.display = 'none';
        document.querySelector('.legend').style.display = 'none';
        document.querySelector('#actions').style.display = 'none';
        document.querySelector('#counter-timer').style.padding = '4rem'
    }

    hideData()
  }
}, 1000);
