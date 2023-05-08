function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.querySelector(".myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunctionTwo() {
  let dotsTwo = document.getElementById("second-row");
  let moreTwo = document.getElementById("more-second");
  let btnTwo = document.querySelector(".myBtn");

  if (dotsTwo.style.display === "none") {
    dotsTwo.style.display = "inline";
    btnTwo.innerHTML = "Read more";
    moreTwo.style.display = "none";
  } else {
    dotsTwo.style.display = "none";
    btnTwo.innerHTML = "Read less";
    moreTwo.style.display = "inline";
  }
}
