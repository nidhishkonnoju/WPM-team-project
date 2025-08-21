document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("settingsForm");
  const saveMessage = document.getElementById("saveMessage");

  const nameInput = document.getElementById("userName");
  const emailSelect = document.getElementById("emailFrequency");
  const darkToggle = document.getElementById("darkModeToggle");

  // Load saved settings from localStorage
  const saved = JSON.parse(localStorage.getItem("userSettings"));
  if (saved) {
    nameInput.value = saved.name || "";
    emailSelect.value = saved.emailPref || "weekly";
    darkToggle.checked = saved.darkMode || false;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const settings = {
      name: nameInput.value,
      emailPref: emailSelect.value,
      darkMode: darkToggle.checked
    };

    localStorage.setItem("userSettings", JSON.stringify(settings));
    saveMessage.style.display = "block";

    // Hide message after 2 seconds
    setTimeout(() => {
      saveMessage.style.display = "none";
    }, 2000);
  });
});