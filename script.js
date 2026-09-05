// ==========================================
// JNaar Beading & Crafts
// script.js
// ==========================================



// ==========================================
// WhatsApp Order
// ==========================================

function orderNow(productName) {

    const phone = "254755752479";

    const message =
        `Hello, I would like to order the ${productName}.`;

    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}



// ==========================================
// Product Filter
// ==========================================

function filterProducts(category) {

    const products = document.querySelectorAll(".product");

    products.forEach(product => {

        if (category === "all" ||
            product.classList.contains(category)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}



// ==========================================
// Hero Image Slider
// ==========================================

const slides = document.querySelector(".slides");

let currentSlide = 0;

if (slides) {

    const totalSlides =
        document.querySelectorAll(".slides img").length;

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= totalSlides) {

            currentSlide = 0;

        }

        slides.style.transform =
            `translateX(-${currentSlide * 100}%)`;

    }, 3000);

}



// ==========================================
// Testimonials Slider
// ==========================================

const reviews =
    document.querySelectorAll(".review");

let reviewIndex = 0;

if (reviews.length > 0) {

    reviews.forEach((review, index) => {

        if (index !== 0) {

            review.style.display = "none";

        }

    });

    setInterval(() => {

        reviews[reviewIndex].style.display = "none";

        reviewIndex++;

        if (reviewIndex >= reviews.length) {

            reviewIndex = 0;

        }

        reviews[reviewIndex].style.display = "block";

    }, 4000);

}



// ==========================================
// Fade-in Animation on Scroll
// ==========================================

const hiddenElements =
    document.querySelectorAll(
        ".product, .feature, .review, .cta, .gallery"
    );

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });

hiddenElements.forEach(element => {

    observer.observe(element);

});



// ==========================================
// Gallery Pause on Hover
// ==========================================

const gallery =
    document.querySelector(".gallery-track");

if (gallery) {

    gallery.addEventListener("mouseenter", () => {

        gallery.style.animationPlayState = "paused";

    });

    gallery.addEventListener("mouseleave", () => {

        gallery.style.animationPlayState = "running";

    });

}



// ==========================================
// Smooth Scroll
// ==========================================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



// ==========================================
// Active Navigation Link
// ==========================================

const navLinks =
    document.querySelectorAll("nav a");

const currentPage =
    window.location.pathname.split("/").pop();

navLinks.forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});



// ==========================================
// Button Hover Effect
// ==========================================

const buttons =
    document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});



// ==========================================
// Console Message
// ==========================================

console.log("JNaar Crafts JavaScript Loaded Successfully");