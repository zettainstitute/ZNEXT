document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // ELEMENTS
    // =========================

    const form = document.getElementById("registrationForm");
    const successMessage = document.getElementById("successMessage");
    const closeMessage = document.getElementById("closeMessage");

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    const topBtn = document.getElementById("topBtn");


    // =========================
    // REGISTRATION FORM
    // =========================

    if (form) {

        form.addEventListener("submit", async function (e) {

            e.preventDefault();

            try {

                const response = await fetch(form.action, {
                    method: "POST",
                    body: new FormData(form),
                    headers: {
                        Accept: "application/json"
                    }
                });

                if (response.ok) {

                    successMessage.classList.add("show");

                    form.reset();

                } else {

                    alert("Registration failed. Please try again.");

                }

            } catch (error) {

                alert("Network error. Please try again.");

            }

        });

    }


    // =========================
    // CLOSE SUCCESS POPUP
    // =========================

    if (closeMessage) {

        closeMessage.addEventListener("click", function () {

            successMessage.classList.remove("show");

        });

    }


    // =========================
    // COUNTER
    // =========================

    const stats = document.querySelector(".stats");
    const counters = document.querySelectorAll(".counter");

    if (stats && counters.length) {

        const runCounter = () => {

            counters.forEach(counter => {

                const target = Number(counter.dataset.count.replace(/\D/g, ""));

                const suffix = counter.dataset.count.includes("+") ? "+" : "";

                let count = 0;

                const increment = Math.ceil(target / 80);

                function update() {

                    count += increment;

                    if (count < target) {

                        counter.innerText = count.toLocaleString();

                        requestAnimationFrame(update);

                    } else {

                        counter.innerText = target.toLocaleString() + suffix;

                    }

                }

                update();

            });

        };

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    runCounter();

                    observer.disconnect();

                }

            });

        });

        observer.observe(stats);

    }


    // =========================
    // FAQ
    // =========================

    document.querySelectorAll(".faq-question").forEach(question => {

        question.addEventListener("click", () => {

            document.querySelectorAll(".faq-item").forEach(item => {

                if (item !== question.parentElement) {

                    item.classList.remove("active");

                }

            });

            question.parentElement.classList.toggle("active");

        });

    });


    // =========================
    // MOBILE MENU
    // =========================

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", () => {

            navbar.classList.toggle("active");

            if (navbar.classList.contains("active")) {

                menuBtn.innerHTML = '<i class="fas fa-times"></i>';

            } else {

                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

            }

        });

        document.querySelectorAll(".navbar a").forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("active");

                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

            });

        });

    }


    // =========================
    // SCROLL TO TOP
    // =========================

    if (topBtn) {

        window.addEventListener("scroll", () => {

            topBtn.style.display = window.scrollY > 400 ? "block" : "none";

        });

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

});


// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("loader-hide");

        }, 800);

    }

});
