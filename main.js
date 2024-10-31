// Funksjon for å åpne og lukke "Join us"-popup-boksen
function toggleJoinPopup() {
    const joinPopup = document.getElementById("joinPopup");
    joinPopup.style.display = joinPopup.style.display === "flex" ? "none" : "flex";
}

// Funksjon for å åpne og lukke hamburgermenyen
function toggleHamburgerMenu() {
    const hamburgerPopup = document.getElementById("hamburgerPopup");
    hamburgerPopup.style.display = hamburgerPopup.style.display === "flex" ? "none" : "flex";
}

// Funksjon for å lukke popup-bokser når man klikker utenfor innholdet
function closeOnClickOutside(event, popupId) {
    const popup = document.getElementById(popupId);
    if (event.target === popup) {
        popup.style.display = "none";
    }
}