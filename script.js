// ========================================
// BIRTHDAY LETTER
// ========================================

const openButton = document.getElementById("openLetter");
const birthdayLetter = document.getElementById("birthdayLetter");
const heartsContainer = document.getElementById("hearts-container");
const bgMusic = document.getElementById("bgMusic");


// ========================================
// OPEN LETTER
// ========================================

openButton.addEventListener("click", function () {

    // Mulai musik ketika tombol ditekan
    bgMusic.play();

    // Cegah tombol diklik berkali-kali
    openButton.disabled = true;

    // Hilangkan tombol secara perlahan
    openButton.style.opacity = "0";
    openButton.style.transform = "translateY(10px)";

    // Beri sedikit waktu sebelum surat muncul
    setTimeout(function () {

        // Tampilkan surat
        birthdayLetter.style.display = "block";

        // Jalankan animasi pembukaan
        birthdayLetter.classList.add("letter-opening");

        // Buat floating hearts
        createHearts();

        // Scroll perlahan menuju surat
        setTimeout(function () {

            birthdayLetter.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 150);

    }, 450);

});


// ========================================
// FLOATING HEARTS
// ========================================

function createHearts() {

    const hearts = [
        "♡",
        "♥",
        "♡",
        "✦",
        "♡"
    ];


    for (let i = 0; i < 18; i++) {

        const heart = document.createElement("span");

        heart.classList.add("floating-heart");

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];


        // Posisi horizontal random
        heart.style.left =
            Math.random() * 100 + "%";


        // Ukuran random
        const size =
            Math.random() * 10 + 12;

        heart.style.fontSize =
            size + "px";


        // Durasi animasi random
        const duration =
            Math.random() * 5 + 5;

        heart.style.animationDuration =
            duration + "s";


        // Delay random
        const delay =
            Math.random() * 2;

        heart.style.animationDelay =
            delay + "s";


        heartsContainer.appendChild(heart);

    }

}


// ========================================
// BACK TO TOP
// ========================================

const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});