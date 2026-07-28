/* ==========================================
   Twinks n Lors DigitalFix Solutions
   app.js
========================================== */
document.addEventListener("DOMContentLoaded", () => {
    // ===============================
    // Navbar color/shadow on scroll
    // ===============================
    const navbar = document.querySelector(".navbar");
    function updateNavbar() {
        if (window.scrollY > 40) {
            navbar.style.background = "#0b3d91";
            navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";
            navbar.style.padding = "8px 0";
        } else {
            navbar.style.background = "rgba(13,71,161,.95)";
            navbar.style.boxShadow = "0 3px 15px rgba(0,0,0,.15)";
            navbar.style.padding = "15px 0";
        }
    }
    updateNavbar();
    window.addEventListener("scroll", updateNavbar);
    // ===============================
    // Smooth scrolling
    // ===============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                // Close mobile menu
                const menu = document.querySelector(".navbar-collapse");
                if (menu.classList.contains("show")) {
                    bootstrap.Collapse.getInstance(menu).hide();
                }
            }
        });
    });
    // ===============================
    // Active menu highlight
    // ===============================
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    function activateMenu() {
        let current = "";
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            const height = section.offsetHeight;
            if (window.scrollY >= top &&
                window.scrollY < top + height) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", activateMenu);
    activateMenu();
    // ===============================
    // Fade-in animation
    // ===============================
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: .15
    });
    document.querySelectorAll(
        ".service-card,.portfolio-card,.about-section,.contact-section"
    ).forEach(item => {
        item.classList.add("hidden");
        observer.observe(item);
    });
});
// ===================================
// Back To Top Button
// ===================================
const topButton = document.createElement("button");
topButton.innerHTML = "↑";
topButton.id = "topButton";
document.body.appendChild(topButton);
topButton.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#ff9800;
color:white;
font-size:24px;
cursor:pointer;
display:none;
box-shadow:0 8px 20px rgba(0,0,0,.25);
z-index:9999;
transition:.3s;
`;
window.addEventListener("scroll", () => {
    if (window.scrollY > 500)
        topButton.style.display = "block";
    else
        topButton.style.display = "none";
});
topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
topButton.addEventListener("mouseenter", () => {
    topButton.style.transform = "scale(1.1)";
});
topButton.addEventListener("mouseleave", () => {
    topButton.style.transform = "scale(1)";
});