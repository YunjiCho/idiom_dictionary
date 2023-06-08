var headings = document.querySelectorAll("h2");

headings.forEach(function (heading) {
  var content = heading.nextElementSibling;
  var textContainer = content.querySelector("div");

  content.style.display = "none";

  heading.addEventListener("click", function () {
    if (content.style.display === "none") {
      content.style.display = "flex";
      textContainer.style.flexDirection = "column";
      // heading.classList.toggle("h2-active");
      changeImage(heading.getAttribute("data-image"), this);

    } else {
      content.style.display = "none";
      // heading.classList.toggle("h2-active");
    }
  });
});

function changeImage(imageName, element) {
  var mainImage = document.getElementById("mainImage");
  mainImage.src = imageName;
}
