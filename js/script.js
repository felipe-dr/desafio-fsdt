document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-form]");
  const submitButton = document.querySelector('[data-form="submit"]');

  submitButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formValues = Array.from(formData.values());

    const url = "https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact";
    const sendValues = {
      names: [...formValues.slice(0, -1)],
      message: formValues.pop(),
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendValues),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Sucesso!", responseData);
      }
    } catch (error) {
      console.log("Erro ao submeter o formulário", error);
    }
  });
});
