// Function to set a cookie with an expiration time (5 minutes)
function setCookie(name, value, minutes) {
    let date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Function to apply the theme
function applyTheme(theme) {
    document.body.className = theme;
    document.getElementById("theme-status").textContent = `Current Theme: ${theme === "dark-theme" ? "Dark" : "Light"}`;
}

// Get the saved theme from document.cookie (basic method)
let savedTheme = document.cookie.includes("theme=dark-theme") ? "dark-theme" : "light-theme";
applyTheme(savedTheme);

// Toggle theme on button click
document.getElementById("theme-toggle").addEventListener("click", function() {
    let newTheme = document.body.classList.contains("light-theme") ? "dark-theme" : "light-theme";
    applyTheme(newTheme);
    setCookie("theme", newTheme, 5); // Save theme for 5 minutes
});