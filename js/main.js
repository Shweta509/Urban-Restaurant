document.querySelector("#label").addEventListener("click", x);
function x() {
   if (document.querySelector("#label").textContent != "X") {
      document.querySelector("#label").textContent = "X";
      document.querySelector("#label").style.transform = "rotateY(360deg)";
      document.querySelector("#label").style.transition = "transform 1s";
   } else {
      document.querySelector("#label").textContent = "☰";
      document.querySelector("#label").style.transform = "rotateY(0deg)";
      document.querySelector("#label").style.transition = "transform 1s";
   }
}
document.getElementById("prime-btn").addEventListener("click", clickMe);
function clickMe() {
   alert("Hey !!! i'll work on these offer's soon buddy");
}
document.querySelector("#plus-btn").addEventListener("click", clickMe1);
function clickMe1() {
   alert("Hey !!! i'll work on these offer's soon buddy");
}
function clickMe2() {
   alert("Hey !!! i'll work on these offer's soon buddy");
}
function clickMe3() {
   alert("Hey !!! i'll work on these offer's soon buddy");
}
