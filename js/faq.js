document.addEventListener("DOMContentLoaded", function () {
    const faqs = document.querySelectorAll(".faq-item");

    faqs.forEach(faq => {
        faq.querySelector(".faq-question").addEventListener("click", function () {
            // Close all other FAQs
            faqs.forEach(item => {
                if (item !== faq) {
                    item.classList.remove("open");
                    item.querySelector(".arrow").classList.remove("active");
                }
            });

            // Toggle current FAQ
            faq.classList.toggle("open");

            // Rotate arrow
            const arrow = faq.querySelector(".arrow");
            arrow.classList.toggle("active");
        });
    });
});