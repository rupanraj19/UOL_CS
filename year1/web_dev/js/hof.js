// add more hall of fame
function addMore() {
    document.getElementById("more").style.display = "block";
    document.getElementById("morebtn").style.display = "none";
  }
  
function addLess() {
    document.getElementById("more").style.display = "none";
    document.getElementById("morebtn").style.display = "flex";
  }



function readMore(btnId, textId) {
  var moreText = document.getElementById(textId);
  var btnText = document.getElementById(btnId);

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btnText.innerHTML = "Read Less";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "Read More";
  }
}
