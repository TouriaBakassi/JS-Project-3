//                                                      clone Instagram
let like = document.querySelector("#LIKE");
let dislike = document.querySelector("#DISLIKE");

let count1 =
  localStorage.getItem("like") == null ? 0 : localStorage.getItem("like");
let count2 =
  localStorage.getItem("dislike") == null ? 0 : localStorage.getItem("dislike");
like.textContent = count1;
dislike.textContent = count2;
like.addEventListener("click", () => {
  like.textContent = ++count1;
  like.style.color = "red";
  like.style.transition = "1s";
  localStorage.setItem("like", count1);
});
dislike.addEventListener("click", () => {
  dislike.textContent = ++count2;
  dislike.style.color = "blue";
  dislike.style.transition = "1s";
  localStorage.setItem("dislike", count2);
});
