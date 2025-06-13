AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

(function () {
  emailjs.init("dWQTNR3aoVNWB9JrI"); // استبدل بـ مفتاحك العام من EmailJS
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_k9tmq99", "template_sc7097l", parms).then(
      function (response) {
        alert("✅ Email sent successfully!");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert("❌ Failed to send email. Please try again.");
        console.error(error);
      }
    );
  });
