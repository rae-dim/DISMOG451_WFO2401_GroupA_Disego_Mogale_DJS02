const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  

  if (isNaN(dividend) || isNaN(divider)) {
    result.innerText = "Something critical went wrong. Please reload the page"
    result.classList.add("critical-error")
  } else if (dividend === '' || divider === '') {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    result.classList.add("error-message")
  }else if (divider === '0'){
    result.innerText = "Division not performed. Invalid number provided. Try again."
    result.classList.add("error-message")
    console.error("Devision by 0 is undefined")
  } else {
    result.innerText = Math.floor(dividend / divider);
    result.classList.remove("error-message")
  }
});


