var a;
function switch(){
  if(a==0) {
    document.getElementById("ptp").style.display = "inline";
    // document.getElementById("ptp2").style.display = "none";
    return a=0;
  }
  else {
  document.getElementById("ptp").style.display = "none";
  // document.getElementById("ptp2").style.display = "inline";
  return a=1;
}