(function () {
  window.gtag_report_conversion = function (url, target) {
    var destination = url;
    var newWindow = null;
    var reported = false;

    if (target === "_blank") {
      newWindow = window.open("about:blank", "_blank", "noopener,noreferrer");
    }

    var callback = function () {
      if (reported) {
        return;
      }

      reported = true;

      if (typeof destination !== "undefined") {
        if (newWindow) {
          newWindow.location = destination;
        } else {
          window.location = destination;
        }
      }
    };

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-18199930711/mmzgCM3rq7YcENfOs-ZD",
        value: 1.0,
        currency: "EUR",
        transaction_id: "",
        event_callback: callback
      });

      window.setTimeout(callback, 1000);
      return false;
    }

    callback();
    return false;
  };

  document.querySelectorAll('[data-conversion="purchase"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.gtag_report_conversion(link.href, link.target);
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
