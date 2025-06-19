// Step 1: Select all the hearts on the page
const articleHearts = document.querySelectorAll(".like-glyph");

// Step 2: Define the mock server call function
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.2) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Step 3: Attach a click event listener to each heart
articleHearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        // Toggle heart appearance
        if (heart.innerText === "♡") {
          heart.innerText = "♥";
          heart.classList.add("activated-heart");
        } else {
          heart.innerText = "♡";
          heart.classList.remove("activated-heart");
        }
      })
      .catch((error) => {
        // On failure, show the error modal temporarily
        const modal = document.getElementById("modal");
        modal.classList.remove("hidden");
        modal.innerText = error;
        setTimeout(() => {
          modal.classList.add("hidden");
        }, 3000);
      });
  });
});
