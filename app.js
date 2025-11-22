let mouseX = 0;
let mouseY = 0;

// Seuraa hiiren liikettä koko sivun alueella
document.addEventListener("mousemove", function (e) {
    // Tallentaa hiiren X-koordinaatin (vasen-oikea)
    mouseX = e.clientX;
    // Tallentaa hiiren Y-koordinaatin (ylä-alas)
    mouseY = e.clientY;
});

console.log("JavaScript is working!");
const bee = document.getElementById("bee");
let tapCount = 0;

let angerThreshold = Math.floor(Math.random() * 7) + 1;

console.log("Bzz " + angerThreshold + " taptap");

bee.onclick = function () {

    tapCount++;

    console.log('tap tap ' + tapCount + ' times');
    if (tapCount >= angerThreshold) {

        console.log("The bee did not like that");

        bee.classList.add("angry");
        chasePlayer();

        // Resetoi laskuri
        tapCount = 0;

        angerThreshold = Math.floor(Math.random() * 7) + 1;
        console.log("New anger theshold: " + angerThreshold);
    }

    setTimeout(() => {
        bee.classList.remove("angry");
    }, 1000);

    tapCount = 0;

    angerThreshold = Math.floor(Math.random() * 5) + 3;
    console.log("uus viha laskuri " + angerThreshold);
};

const x = Math.random() * (window.innerWidth - 80);
const y = Math.random() * (window.innerHeight - 80);

// Asetetaan mehiläisen uusi sijainti
bee.style.left = x + "px";
bee.style.top = y + "px";

function chasePlayer() {

    // Luodaan 20 ms välein toistuva liike (50 kertaa sekunnissa)
    let chaseInterval = setInterval(() => {

        // Nykyinen mehiläisen sijainti ruudulla
        let beeX = bee.offsetLeft;
        let beeY = bee.offsetTop;

        // Liikkumisnopeus
        let speed = 5;

        // Erotus hiiren ja mehiläisen välillä (suunta)
        let dx = mouseX - beeX;
        let dy = mouseY - beeY;

        let distance = Math.sqrt(dx*dx + dy*dy);

        dx /= distance;
        dy /= distance;

        // Siirretään mehiläistä hiirtä kohti
        bee.style.left = (beeX + dx * speed) + "px";
        bee.style.top = (beeY + dy * speed) + "px";

        // Jos mehiläinen on tarpeeksi lähellä hiirtä → pysäytä ja tee pistovaikutus
        if (distance < 20) {
            clearInterval(chaseInterval);
            stingAnimation();
        }

    }, 20);
}
