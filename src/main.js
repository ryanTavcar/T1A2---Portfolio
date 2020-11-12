
const btn = document.querySelector(".expand_theme");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function() {
  // Swap out the URL for the different stylesheets
  if (theme.getAttribute("href") == "styles/style.css") {
    theme.href = "styles/dark-theme.css";
  } else {
    theme.href = "styles/style.css";
  }
});
