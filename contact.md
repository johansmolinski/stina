---
layout: page
title: Kontakt
permalink: /contact.html
---

<h1>Kontakta Oss</h1>
<p>Om du har frågor eller vill veta mer om våra kattungar, använd formuläret nedan för att kontakta oss.</p>

<form id="contact-form" action="/api/contact" method="post">
    <label for="name">Namn:</label>
    <input type="text" id="name" name="name" placeholder="Ditt namn" required>

    <label for="email">E-post:</label>
    <input type="email" id="email" name="email" placeholder="Din e-postadress" required>

    <label for="message">Meddelande:</label>
    <textarea id="message" name="message" placeholder="Skriv ditt meddelande här" required></textarea>

    <button type="submit">Skicka</button>
</form>

<script>
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert("Tack för ditt meddelande! Vi kommer att kontakta dig snart.");
        } else {
            alert("Något gick fel. Försök igen senare.");
        }
    })
    .catch(() => alert("Ett fel inträffade. Försök igen senare."));
});
</script>

<style>
form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 600px;
    margin: 2rem auto;
}
form label {
    font-size: 1.2rem;
}
form input, form textarea, form button {
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}
form button {
    background-color: #ff6f61;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}
form button:hover {
    background-color: #e0554f;
}
</style>
