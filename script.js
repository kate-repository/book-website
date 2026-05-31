(function () {
  function reportPurchaseConversion() {
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-18199930711/mmzgCM3rq7YcENfOs-ZD",
        value: 1.0,
        currency: "EUR"
      });
    }
  }

  document.querySelectorAll('[data-conversion="purchase"]').forEach(function (link) {
    link.addEventListener("click", function () {
      reportPurchaseConversion();
    });
  });

  var questions = document.querySelectorAll(".faq-question");

  questions.forEach(function (button, index) {
    var item = button.closest(".faq-item");
    var answer = item ? item.querySelector(".faq-answer") : null;
    var answerId = "faq-answer-" + (index + 1);

    if (answer) {
      answer.id = answerId;
      answer.hidden = true;
      button.setAttribute("aria-controls", answerId);
    }

    button.addEventListener("click", function () {
      var item = button.closest(".faq-item");
      var isOpen = item.classList.contains("is-open");

      document.querySelectorAll(".faq-item").forEach(function (faqItem) {
        faqItem.classList.remove("is-open");
        var faqButton = faqItem.querySelector(".faq-question");
        var faqAnswer = faqItem.querySelector(".faq-answer");

        if (faqButton) {
          faqButton.setAttribute("aria-expanded", "false");
        }

        if (faqAnswer) {
          faqAnswer.hidden = true;
        }
      });

      if (!isOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        var activeAnswer = item.querySelector(".faq-answer");
        if (activeAnswer) {
          activeAnswer.hidden = false;
        }
      }
    });
  });
})();
