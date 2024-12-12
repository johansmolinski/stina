---
layout: page
title: Maine Coon-kattungar i Södertälje
permalink: kattungar.html
---

<h1>Kattungar av SE*Vassa klor</h1>

Stina är två år gammal och detta är hennes andra kull. Hon har tidigare fått en kull hos sin dåvarande familj i Norrköping, med samma hane som denna gång. Den förra kullen bestod av friska fina kattungar, precis som denna.
Värdfamiljen för katterna består av femåriga Valdy, mamma Aleksandra och pappa Johan. Vi har haft katt i 16 år och har tidigare erfarenhet av kattungar, men detta är vår första renrasiga kull Maine Coon. Våra katter är sociala, trevliga och lekfulla. Aleksandra är registrerad uppfödare i SVERAK och stamnamnet är SE*Vassa klor. Ungarna är Chopin, Bach och Vivaldi.

<h2>Stamtavlor</h2>
<ul>
<li>Stina (mor): <a href="https://findus.sverak.se/Stambok/Visa/539053">S*RockMi Teeling</a></li>
<li>Jacon (far): <a href="https://findus.sverak.se/Stambok/Visa/558104">Quiet Jacon off Afelio</a></li>
<li>Chopin: <a href="https://findus.sverak.se/Stambok/Visa/571982">SE*Vassa klor Chopin</a></li>
<li>Bach: <a href="https://findus.sverak.se/Stambok/Visa/571983">SE*Vassa klor Bach</a></li>
<li>Vivaldi: <a href="https://findus.sverak.se/Stambok/Visa/571984">SE*Vassa klor Vivaldi</a></li>
</ul>

<h2>Fotogalleri</h2>
<div class="gallery">

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-1.jpg" alt="Julfotografering">
    <h2>Julfotografering</h2>
    <p></p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-2.jpg" alt="Bach, Chopin och Vivaldi">
    <h2>Bach, Chopin och Vivaldi</h2>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-3.jpg" alt="Vivaldi och Bach">
    <h2>Vivaldi och Bach</h2>
    <p>och Chopin sover där bakom</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-4.jpg" alt="Brödraskap">
    <h2>Brödraskap</h2>
    <p>Vivaldi håller en varm tass om brorsan</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-5.jpg" alt="Mer brödraskap">
    <h2>Mer brödraskap</h2>
    <p>Bach tvättar brorsan</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-6.jpg" alt="Ännu mer brödraskap">
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-7.jpg" alt="Stina">
    <h2>Stina</h2>
    <p>Kullens förtjusande mor</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-8.jpg" alt="Jaktträning">
    <h2>Jaktträning</h2>
    <p>av intensivaste slag</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-9.jpg" alt="Chopin">
    <h2>Chopin</h2>
    <p>Säg omelett!</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-10.jpg" alt="Chopin">
    <h2>Chopin</h2>
    <p>Se upp för stupet</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-11.jpg" alt="Vivaldi">
    <h2>Vivaldi</h2>
    <p>Det kliar i tänderna när man ser en mus, även om det är en leksak</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-12.jpg" alt="Mera jaktträning">
    <h2>Mera jaktträning</h2>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-13.jpg" alt="Stina">
    <h2>Stina</h2>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-14.jpg" alt="Titta på kameran och le!">
    <h2>Titta på kameran och le!</h2>
    <p>Ja, det gäller även Bach och Chopin</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-15.jpg" alt="Full fart">
    <h2>Full fart</h2>
    <p>Chopin är igång</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-16.jpg" alt="Trötta katter">
    <h2>Trötta katter</h2>
    <p>Bach och Vivaldi ska ta en tupplur</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-17.jpg" alt="Här är kameran!">
    <h2>Här är kameran!</h2>
    <p>Men det går ju att titta på roligare saker också</p>
</div>

<div class="kitten-card">
    <img src="/assets/images/kittens/kitten-18.jpg" alt="Ett till försök">
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
