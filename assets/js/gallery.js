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
