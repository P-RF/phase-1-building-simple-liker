// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Server call
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve('Success!') : reject('Server error. Try again.');
    }, 300);
  });
}

// Handling heart click
document.addEventListener("DOMContentLoaded", () => {
  const heart = document.querySelector(".like-glyph");
  const errorModal = document.getElementById("error-modal");
  const errorMessage = document.getElementById("error-message");

  heart.addEventListener("click", () => {
    if (heart.classList.contains("activated-heart")) {
      // User clicks on a full heart
      heart.textContent = "♡";
      heart.classList.remove("activated-heart");
    } else {
      // User clicks an empty heart
      mimicServerCall()
        .then(() => {
          heart.textContent = "♥";
          heart.classList.add("activated-heart");
        })
        .catch((error) => {
          // Show error modal and message
          errorMessage.textContent = error;
          errorModal.classList.remove("hidden");

          // Hide modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    }
  });
});


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
