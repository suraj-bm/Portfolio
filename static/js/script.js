document.getElementById("linkedin-link").onclick = function () {
  window.location.href = "https://linkedin.com/in/suraj-bm-0952ab2a6";
};
let a = document.getElementById("github-link");
let b = function (e) {
  window.location.href = "https://github.com/suraj-bm";
};
a.addEventListener("click", b);

document.getElementById("dribbble-link").onclick = function () {
  window.location.href = "https://dribbble.com/your-profile";
};
// let a = document.getElementById("my_name");
// let div = document.createElement("div");
// div.innerHTML = "<h1>Hello World!</h1>";
// a.appendChild(div);
//a.before and after puts it outside the container
//a.append and prepend puts it inside the container
//a.replacewith will replace whole a with div
// setTimeout(() => {}, 5000);
// sum = (a, b, c) => {
//   alert("the sum of your number is " + (a + b + c));
// };
// setInterval(sum, 3000, 1, 2, 4);
// let c = confirm("do you wanna go to github link");
// if (c == false) {
//   a.removeEventListener("click", b);
// }
//when an event occur the browser creates an event object
document.getElementById("download.cv").onclick = function() {
  window.location.href = "../static/pdf/SurajBmCV1.pdf"; // Replace with actual file path
};
