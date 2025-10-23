
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");


  const dark = {
    '--sidebar-bg': '#111',
    '--sidebar-text': '#eee',
    '--content-bg': '#1c1c1c',
    '--text-color': '#ddd',
    '--accent-color': '#f45'
  };

  const light = {
    '--sidebar-bg': '#20232a',
    '--sidebar-text': '#f5f5f5',
    '--content-bg': '#fff',
    '--text-color': '#333',
    '--accent-color': '#e44'
  };

  let darkMode = false;


  function toggleTheme() {
    darkMode = !darkMode;
    const theme = darkMode ? dark : light;
    Object.entries(theme).forEach(([k, v]) => root.style.setProperty(k, v));
    if (toggleBtn) toggleBtn.textContent = darkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }

  if (toggleBtn) toggleBtn.addEventListener("click", toggleTheme);

  if (localStorage.getItem("theme") === "dark") {
    darkMode = true;
    Object.entries(dark).forEach(([k, v]) => root.style.setProperty(k, v));
  }



});

function isValid() {
  const username = document.getElementById("name");
  const email = document.getElementById("email");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let valid = true;

  if (username.value.length < 3) {
    alert("Name must have at least 3 characters");
    valid = false;
  }

  if (!email.value.match(emailPattern)) {
    alert("Invalid email address");
    valid = false;
  }

  if (valid) {
    alert("Form sent successfully!");
  }

  return valid; 
}

