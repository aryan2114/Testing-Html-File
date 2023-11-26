function navigateToAnotherPage() {
    // Change "anotherpage.html" to the actual name of your target HTML page
    window.location.href = "linkk.html";
  }
  
  function navigateBack() {
    // Go back to the previous page
    window.history.back();
  }
  // script.js

document.getElementById('homeLink').addEventListener('click', function (event) {
    event.preventDefault();

    // Scroll to the top of the page smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
