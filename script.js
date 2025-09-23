document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#briefing-form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim();
    const company = formData.get("company")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const focus = formData.get("focus")?.toString().trim();

    if (!(name && company && email && focus)) {
      form.reportValidity();
      return;
    }

    const subject = encodeURIComponent("Briefing request — " + name);
    const bodyLines = [
      `Name: ${name}`,
      `Organization: ${company}`,
      `Secure contact: ${email}`,
      "",
      "Immediate focus:",
      focus,
    ];

    const body = encodeURIComponent(bodyLines.join("\n"));
    const mailto = `mailto:hello@journalbrand.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
    form.reset();

    const message =
      "Secure mail client launched. If it did not open, contact hello@journalbrand.com.";
    const existingConfirmation = form.querySelector(".form__confirmation");

    if (existingConfirmation) {
      existingConfirmation.textContent = message;
    } else {
      const confirmation = document.createElement("p");
      confirmation.className = "form__confirmation";
      confirmation.textContent = message;
      form.appendChild(confirmation);
    }
  });
});
