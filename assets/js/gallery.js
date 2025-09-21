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

    const fsToggle = document.createElement("button");
    fsToggle.classList.add("fs-toggle");
    fsToggle.title = "Toggle fullscreen";
    fsToggle.innerHTML = "⤢"; // fullscreen icon
    controls.appendChild(fsToggle);

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
        exitFullscreenIfNeeded();
        fullscreen.style.display = "none";
    });

    // Fullscreen API helpers
    function requestFullscreen(element) {
        if (element.requestFullscreen) return element.requestFullscreen();
        if (element.webkitRequestFullscreen) return element.webkitRequestFullscreen();
        if (element.mozRequestFullScreen) return element.mozRequestFullScreen();
        if (element.msRequestFullscreen) return element.msRequestFullscreen();
        return Promise.reject(new Error('Fullscreen API is not supported'));
    }
    function exitFullscreenIfNeeded() {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
            if (document.exitFullscreen) return document.exitFullscreen();
            if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
            if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
            if (document.msExitFullscreen) return document.msExitFullscreen();
        } else {
            // remove maximized class fallback
            fullscreen.classList.remove('maximized');
        }
    }

    fsToggle.addEventListener('click', () => {
        // Try to use Fullscreen API
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
            exitFullscreenIfNeeded();
            return;
        }

        requestFullscreen(fullscreen).catch(() => {
            // Fallback: toggle maximized CSS class to approximate fullscreen
            fullscreen.classList.toggle('maximized');
        });
    });
});
