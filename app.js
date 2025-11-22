let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
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

        tapCount = 0;

        angerThreshold = Math.floor(Math.random() * 7) + 1;
        console.log("uus viha laskuri " + angerThreshold);

        
        // bee chasing mouse, starts here
        let chaseTime = 4000;
        let startTime = Date.now();

        let chaseInterval = setInterval(() => {

        // Current bee position (top-left corner)
        let beeX = bee.offsetLeft + 40;  
        let beeY = bee.offsetTop + 40;

        // Direction from bee → mouse
        let dx = mouseX - beeX;
        let dy = mouseY - beeY;

        let distance = Math.sqrt(dx * dx + dy * dy);

        dx /= distance;
        dy /= distance;

        let speed = 150;

        bee.style.left = (bee.offsetLeft + dx * speed) + "px";
        bee.style.top = (bee.offsetTop + dy * speed) + "px";

        if (Date.now() - startTime > chaseTime) {
            clearInterval(chaseInterval);
            bee.classList.remove("angry");
        }

}, 150);

return;   

}

    const x = Math.random() * (window.innerWidth - 80);
    const y = Math.random() * (window.innerHeight - 80);

    bee.style.left = x + "px";
    bee.style.top = y + "px";

};