const button = document.querySelector(".submitBtn")?.addEventListener("click", palindromeChecker);
const enterItem = (e) => {
  if (e.key === "Enter") {
    palindromeChecker();
  }
};
correctResult = document.querySelector("#rightAnswer");
wrongResult = document.querySelector("#wrongAnswer");

function palindromeChecker() {
  let string = document.querySelector(".wordInput").value;
  let url = `/palindrome?word=${string}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      correctResult.innerText = "";
      wrongResult.innerText = "";
      console.log(data);
      if (data.value) {
        correctResult.innerText = `${data.input} is a palindrome! Reversed it is: ${data.output}`;
      } else {
        wrongResult.innerText = `${data.input} is not a palindrome! Reversed it is: ${data.output}`;
      }
    });
}