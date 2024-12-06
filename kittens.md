---
layout: page
title: Våra Maine Coon-kattungar
---

<h1>Kattungar</h1>

Stina är två år gammal och detta är hennes andra kull. Hon har tidigare fått en kull hos sin dåvarande familj i Norrköping, med samma hane som denna gång. Den förra kullen bestod av friska fina kattungar, precis som denna.
Värdfamiljen för katterna består av femåriga Valdy, mamma Aleksandra och pappa Johan. Vi har haft katt i 16 år och har tidigare erfarenhet av kattungar, men detta är vår första renrasiga kull Maine Coon. Våra katter är sociala, trevliga och lekfulla.

<div class="gallery">

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-1.jpg" alt="Kitten 1">
    <h2>Julfotografering</h2>
    <p></p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-2.jpg" alt="Kitten 2">
    <h2>Kullen</h2>
    <p>Bach, Chopin och Vivaldi</p>
</div>

</div>


<script>
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelectorAll(".kitten-card img");
    const fullscreen = document.createElement("div");
    fullscreen.classList.add("fullscreen");

    const img = document.createElement("img");
    fullscreen.appendChild(img);

    const controls = document.createElement("div");
    controls.classList.add("controls");
    fullscreen.appendChild(controls);

    const prev = document.createElement("button");
    prev.innerHTML = "&#9664;";
    controls.appendChild(prev);

    const next = document.createElement("button");
    next.innerHTML = "&#9654;";
    controls.appendChild(next);

    const close = document.createElement("button");
    close.innerText = "Stäng";
    close.classList.add("close");
    fullscreen.appendChild(close);

    document.body.appendChild(fullscreen);

    let currentImage = null;

    gallery.forEach((image, index) => {
        image.addEventListener("click", () => {
            currentImage = index;
            img.src = image.src;
            fullscreen.style.display = "flex";
        });
    });

    prev.addEventListener("click", () => {
        if (currentImage !== null) {
            currentImage = (currentImage - 1 + gallery.length) % gallery.length;
            img.src = gallery[currentImage].src;
        }
    });

    next.addEventListener("click", () => {
        if (currentImage !== null) {
            currentImage = (currentImage + 1) % gallery.length;
            img.src = gallery[currentImage].src;
        }
    });

    close.addEventListener("click", () => {
        fullscreen.style.display = "none";
    });
});
</script>
