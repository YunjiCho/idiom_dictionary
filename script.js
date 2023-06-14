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

if (window.innerWidth <= 768) {
  var targetDiv = document.querySelector(".text-container2");

  headings.forEach(function (heading) {
    var content = heading.nextElementSibling;
    var textContainer = content.querySelector("div");

    heading.addEventListener("click", function () {
      if (content.style.display === "none") {
        headings.forEach(function (h) {
          h.nextElementSibling.style.display = "none";
        });
        content.style.display = "flex";
        textContainer.style.flexDirection = "column";
        changeImage(heading.getAttribute("data-image"));

        // 이미지 위치를 클릭한 h2 바로 위로 조정
        mainImage.style.position = "relative";
        mainImage.style.top = "-100%";
      } else {
        content.style.display = "none";
        mainImage.style.position = "";
        mainImage.style.top = "";
      }

      headings.forEach((h) => h.classList.remove("highlight"));
      heading.classList.add("highlight");
    });
  });
}
