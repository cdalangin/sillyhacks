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
}
