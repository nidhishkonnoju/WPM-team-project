document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("campaignForm");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("campaignName").value;
    const type = document.getElementById("campaignType").value;
    const date = document.getElementById("launchDate").value;

    confirmation.textContent = `✅ Campaign "${name}" (${type}) scheduled for ${date}`;
    confirmation.style.display = "block";

    // To clear the form after submission, you can uncomment the next line
    // form.reset();
  });
});