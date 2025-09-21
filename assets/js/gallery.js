document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelectorAll(".kitten-card img");
    const fullscreen = document.createElement("div");
    fullscreen.classList.add("fullscreen");

    // Frame holds the white panel with image and caption
    const frame = document.createElement('div');
    frame.classList.add('frame');
    const img = document.createElement("img");
    frame.appendChild(img);

    const caption = document.createElement('div');
    caption.classList.add('caption');
    const captionTitle = document.createElement('h2');
    const captionText = document.createElement('p');
    caption.appendChild(captionTitle);
    caption.appendChild(captionText);
    frame.appendChild(caption);
    fullscreen.appendChild(frame);

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
    fsToggle.classList.add("fs-toggle", "icon-btn");
    fsToggle.title = "Toggle fullscreen";
    fsToggle.setAttribute('aria-label', 'Full screen');
    // Inline SVG fullscreen icon to match close icon sizing
    fsToggle.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M7 14H5v4h4v-2H7v-2zm10 0v2h-2v2h4v-4h-2zM7 6h2V4H5v4h2V6zm10 0v2h2V4h-4v2h2z" fill="#111"/></svg>';

    const close = document.createElement("button");
    close.classList.add("close", "icon-btn");
    // SVG close icon (12x12) — accessible label added
    close.setAttribute('aria-label', 'Stäng');
    close.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" fill="#111"/></svg>';
    fullscreen.appendChild(close);
    // place fullscreen toggle to the left of the close button
    fullscreen.insertBefore(fsToggle, close);

    document.body.appendChild(fullscreen);

    let currentImage = null;

    function showAtIndex(index) {
        const card = gallery[index].closest('.kitten-card');
        currentImage = index;
        img.src = gallery[index].src;
        // Populate caption if present
        const h2 = card.querySelector('h2');
        const p = card.querySelector('p');
        captionTitle.textContent = h2 ? h2.textContent : '';
        captionText.textContent = p ? p.textContent : '';
        // Show overlay
        fullscreen.style.display = 'flex';
    }

    gallery.forEach((image, index) => {
        image.addEventListener("click", () => showAtIndex(index));
    });

    prev.addEventListener("click", () => {
        if (currentImage !== null) {
            currentImage = (currentImage - 1 + gallery.length) % gallery.length;
            showAtIndex(currentImage);
        }
    });

    next.addEventListener("click", () => {
        if (currentImage !== null) {
            currentImage = (currentImage + 1) % gallery.length;
            showAtIndex(currentImage);
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
