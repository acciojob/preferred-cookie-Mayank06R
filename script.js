//your JS code here. If required.
// Function to set CSS variables based on user preferences
function applyPreferences() {
  const fontSize = getCookie("fontsize") || "16px";
  const fontColor = getCookie("fontcolor") || "#000000";

  document.documentElement.style.setProperty("--fontsize", fontSize);
  document.documentElement.style.setProperty("--fontcolor", fontColor);

  // Set the form fields to match saved preferences
  document.getElementById("fontsize").value = parseInt(fontSize, 10);
  document.getElementById("fontcolor").value = fontColor;
}

// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Function to get a cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

// Event listener for form submission
document.getElementById("preferencesForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const fontSize = `${document.getElementById("fontsize").value}px`;
  const fontColor = document.getElementById("fontcolor").value;

  // Save preferences to cookies
  setCookie("fontsize", fontSize, 365);
  setCookie("fontcolor", fontColor, 365);

  // Apply preferences immediately
  applyPreferences();
});

// Apply saved preferences on page load
applyPreferences();
