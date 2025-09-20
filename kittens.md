---
layout: page
title: Maine Coon-kattungar i Södertälje
permalink: kattungar.html
---

<h1>Aktuell kull&dash;SE*Vassa klor</h1>

Vår fantastiske lille Atari är snart redo att flytta till ett nytt kärleksfullt hem! Han är född 7 juli 2025 och blir leveransklar 14 oktober. Det är en social, trygg och nyfiken liten grabb med mycket spring i benen.

Väl omhändertagen av mamma Stina och vår 8 månader gamla kattunge Sture, som har busat och tränat med honom varje dag, som om det var hans bror. För en ensam liten kisse har det varit helt ovärderligt. 

<h3>Kattungen</h3>
<ul>
<li>Atari (<a href="https://findus.sverak.se/Stambok/Visa/584506">stamtavla SE*Vassa Klor Atari</a>)</li>
</ul>

<h3>Föräldrarna</h3>
<ul>
<li>Stina (<a href="https://findus.sverak.se/Stambok/Visa/539053">stamtavla SE*RockMi Teeling</a>)</li>
<li>Jacon (<a href="https://findus.sverak.se/Stambok/Visa/558104">stamtavla Quiet Jacon off Afelio</a>)</li>
</ul>


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

<h2>Tidigare kullar</h2>
<ul>
<li><a href="kull-1.html">Första kullen (2024)</a></li>
</ul>
