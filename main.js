// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll('.like-glyph')

function likedHearts (event) {
  const heart = event.target
    mimicServerCall()
    .then((successMessage) => {
      alert('Mimicing server call...')
      alert(successMessage)
      heart.innerText = FULL_HEART

    })
    .catch((err) => {
      let errorModal = document.querySelector('#modal')
      let modalMessage = errorModal.querySelector('p')
      errorModal.classList.remove('hidden')
      modalMessage.innerText = err.message
      setTimeout(() => {
        errorModal.classList.add('hidden')
      }, 3000)
    })
}

for(const likes of hearts) {
  likes.addEventListener('click', likedHearts)
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
