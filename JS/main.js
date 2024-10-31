function toggleJoinPopup() {
    const joinPopup = document.getElementById("joinPopup");
    joinPopup.style.display = joinPopup.style.display === "flex" ? "none" : "flex";
}
function toggleHamburgerMenu() {
    const hamburgerPopup = document.getElementById("hamburgerPopup");
    hamburgerPopup.style.display = hamburgerPopup.style.display === "flex" ? "none" : "flex";
}
function closeOnClickOutside(event, popupId) {
    const popup = document.getElementById(popupId);
    if (event.target === popup) {
        popup.style.display = "none";
    }
}