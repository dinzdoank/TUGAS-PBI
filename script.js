// Toggle menu navigasi untuk mobile
document.getElementById("menu-toggle").addEventListener("click", function () {
    var navMenu = document.getElementById("nav-menu");
    navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
});

// Efek animasi saat scroll
function revealElements() {
    document.querySelectorAll(".fade-in").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
            el.classList.add("show");
        }
    });
}
window.addEventListener("scroll", revealElements);
revealElements();

// Validasi form input
document.getElementById("kontak-form").addEventListener("submit", function (event) {
    var nama = document.getElementById("nama").value.trim();
    var email = document.getElementById("email").value.trim();
    var pesan = document.getElementById("pesan").value.trim();
    var errorMsg = document.getElementById("error-msg");

    if (nama === "" || email === "" || !email.includes("@") || pesan === "") {
        errorMsg.classList.remove("hidden");
        event.preventDefault();
    } else {
        errorMsg.classList.add("hidden");
        alert("Pesan berhasil dikirim!");
    }
});
