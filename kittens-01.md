---
layout: page
title: Första kullen 
permalink: kull-1.html
---

<h1>Första kullen (2024)&dash;SE*Vassa klor</h1>

<h3>Kattungarna</h3>
<ul>
<li>Vivaldi(<a href="https://findus.sverak.se/Stambok/Visa/571984">stamtavla SE*Vassa klor Vivaldi</a>)</li>
<li>Chopin (<a href="https://findus.sverak.se/Stambok/Visa/571982">stamtavla SE*Vassa klor Chopin</a>)</li>
<li>Bach (<a href="https://findus.sverak.se/Stambok/Visa/571983">stamtavla SE*Vassa klor Bach</a>)</li>
</ul>
<h3>Föräldrarna</h3>
<ul>
<li>Stina (<a href="https://findus.sverak.se/Stambok/Visa/539053">stamtavla SE*RockMi Teeling</a>)</li>
<li>Jacon (<a href="https://findus.sverak.se/Stambok/Visa/558104">stamtavla Quiet Jacon off Afelio</a>)</li>
</ul>

<h3>Fotogalleri</h3>
<div class="gallery">

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-1.jpg" alt="Julfotografering">
    <h2>Julfotografering</h2>
    <p></p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-2.jpg" alt="Bach, Chopin och Vivaldi">
    <h2>Bach, Chopin och Vivaldi</h2>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-3.jpg" alt="Vivaldi och Bach">
    <h2>Vivaldi och Bach</h2>
    <p>och Chopin sover där bakom</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-4.jpg" alt="Brödraskap">
    <h2>Brödraskap</h2>
    <p>Vivaldi håller en varm tass om brorsan</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-5.jpg" alt="Mer brödraskap">
    <h2>Mer brödraskap</h2>
    <p>Bach tvättar brorsan</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-6.jpg" alt="Ännu mer brödraskap">
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-7.jpg" alt="Stina">
    <h2>Stina</h2>
    <p>Kullens förtjusande mor</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-8.jpg" alt="Jaktträning">
    <h2>Jaktträning</h2>
    <p>av intensivaste slag</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-9.jpg" alt="Chopin">
    <h2>Chopin</h2>
    <p>Säg omelett!</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-10.jpg" alt="Chopin">
    <h2>Chopin</h2>
    <p>Se upp för stupet</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-11.jpg" alt="Vivaldi">
    <h2>Vivaldi</h2>
    <p>Det kliar i tänderna när man ser en mus, även om det är en leksak</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-12.jpg" alt="Mera jaktträning">
    <h2>Mera jaktträning</h2>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-13.jpg" alt="Stina">
    <h2>Stina</h2>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-14.jpg" alt="Titta på kameran och le!">
    <h2>Titta på kameran och le!</h2>
    <p>Ja, det gäller även Bach och Chopin</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-15.jpg" alt="Full fart">
    <h2>Full fart</h2>
    <p>Chopin är igång</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-16.jpg" alt="Trötta katter">
    <h2>Trötta katter</h2>
    <p>Bach och Vivaldi ska ta en tupplur</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-17.jpg" alt="Här är kameran!">
    <h2>Här är kameran!</h2>
    <p>Men det går ju att titta på roligare saker också</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens-01/kitten-18.jpg" alt="Ett till försök">
    <h2>Ett till försök</h2>
    <p>Och fler lär behövas</p>
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

