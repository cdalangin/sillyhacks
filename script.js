var a;

function change() {
    if (a == 0) {
        document.getElementById("ptp").style.display = "initial";
        document.getElementById("ptp2").style.display = "none";

        document.getElementById("titleA").style.display = "initial";
        document.getElementById("titleB").style.display = "none";
        return a = 0;
    }
    else {
        document.getElementById("ptp").style.display = "none";
        document.getElementById("ptp2").style.display = "initial";

        document.getElementById("titleB").style.display = "initial";
        document.getElementById("titleA").style.display = "none";
        return a = 1;
    }
};

var count = 0;
function useless() {
  if (count == 0) {
    alert("What did you expect?")
    console.log(count)
  }
  count++
  if (count == 1) {
    alert("Why did you do this?");
  }
  count++
  if (count == 2) {
    alert("See you wouldn't be stuck in this loop if you didn't push the button.");
  }
  count++
  if (count == 3) {
    alert("Dis u: 🤡");
  }
  count++
  if (count == 4) {
    alert("I hope you learned your lesson");
  }
  count++
  if (count == 5) {
    alert("Stop going around pressing random buttons");
  }
  count++
  if (count == 6) {
    alert("Have a great day");
  }
}
