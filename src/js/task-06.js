const input = document.getElementById("validation-input");

input.addEventListener("blur", function () {
  const expectedLength = parseInt(input.getAttribute("data-length"));
  const inputValue = input.value.length;

  if (inputValue === expectedLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
