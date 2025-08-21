document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("workflowForm");
  const output = document.getElementById("workflowMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("workflowName").value;
    const steps = document.getElementById("workflowSteps").value;

    output.textContent = `✅ Workflow "${name}" created.`;
    output.style.display = "block";

    // Optionally clear form
    // form.reset();
  });
});