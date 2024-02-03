const input = document.querySelector("textarea");
const button = document.querySelector("button");
const counter = document.querySelector('h2');

let string = "";

input.addEventListener("keyup", (e) => {
  const ans = getWordCount(e.target.value);
  counter.innerHTML = ans;
});


button.addEventListener("click", () => {
  input.value = "";
  counter.innerHTML = 0;
})

function getWordCount(str) {
  let ans = 0
  ans = str.trim() === '' ? 0 : str.match(/\S+/g).length;
  return ans;
}
