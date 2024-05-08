document.addEventListener("DOMContentLoaded", function() {
  // Get all buttons on the page
  var buttons = document.querySelectorAll(".btn-clicked");

  // Add click event listener to each button
  buttons.forEach(function(button) {
      button.addEventListener("click", function() {
          // Remove border from previously selected button
          var previouslySelected = document.querySelector(".lang-btn");
          if (previouslySelected) {
              previouslySelected.classList.remove("lang-btn");
          }

          // Add border to the clicked button
          this.classList.add("lang-btn");
      });
  });
});
