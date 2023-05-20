document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image");

  images.forEach(function (image) {
    image.addEventListener("click", function () {
      const imageText = this.nextElementSibling;

      if (imageText.style.display === "none") {
        imageText.style.display = "block";
      } else {
        imageText.style.display = "none";
      }
    });
  });
});
