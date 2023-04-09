const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    // console.log(event.target);
    // Ví dụ trong thẻ div Unhappy, event.target là chỉ cụ thể những dòng html của từng phần tử trong thẻ div khi click vào. Ví dụ khi click vào emoj thì sẽ hiện ra img hoặc click vào rìa của thẻ thì sẽ ra toàn bộ html của thẻ div Unhappy, còn khi click vào chữ Unhappy thì nó sẽ hiện ra tag small.
    removeActive();
    // selectedRating --> to get Unhappy or Neutral ... 
    // ParentNode is used to be able to click on emoj
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    // To make line empty in js --> using <br> 
    // To bold in js --> using <strong> 
    containerEl.innerHTML = `
        <strong>Thank you!</strong>  
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
  }
});

// Remove Active to avoid active 2 or 3 emotion concurrently
function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}