const amount = document.getElementById("amount");
const from = document.getElementById("from");
const to = document.getElementById("to");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert(`Converting ${amount.value} from ${from.value} to ${to.value}`);
});
