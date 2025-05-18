// sidebar-loader.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("/sidebar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("sidebar-placeholder").innerHTML = data;

      // Attach listeners again
      document.querySelectorAll('.expandable > a').forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          link.parentElement.classList.toggle('open');
        });
      });
    });
});

