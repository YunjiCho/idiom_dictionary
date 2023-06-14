var headings = document.querySelectorAll("h2");
var mainImage = document.getElementById("mainImage");
var isScrolling = false;

headings.forEach(function (heading) {
  var content = heading.nextElementSibling;
  var textContainer = content.querySelector("div");

  content.style.display = "none";

  heading.addEventListener("click", function () {
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - lastClickTime;

    if (elapsedTime > 20000) {
      location.reload();
    } else {
      if (content.style.display === "none") {
        content.style.display = "flex";
        textContainer.style.flexDirection = "column";
        changeImage(heading.getAttribute("data-image"), this);
      } else {
        content.style.display = "none";
      }
    }
    // Remove highlight class from all h2 elements
    headings.forEach((h) => h.classList.remove("highlight"));
    // Add highlight class to the clicked h2 element
    heading.classList.add("highlight");

    lastClickTime = currentTime;
  });
});

function changeImage(imageName, element) {
  mainImage.src = imageName;
}

window.addEventListener("scroll", function () {
  if (!isScrolling) {
    window.requestAnimationFrame(function () {
      if (window.innerWidth > 768) {
        mainImage.style.top = window.pageYOffset + "px";
      }
      isScrolling = false;
    });
  }
  isScrolling = true;
});
