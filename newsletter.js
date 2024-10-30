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
    const popupContent = popup.querySelector(".popup-content");

    if (popup.style.display === "flex" && !popupContent.contains(event.target)) {
        popup.style.display = "none";
    }
}

function goToBlogPosts() {
    alert("Navigerer til Blog Posts");
}

document.addEventListener("DOMContentLoaded", function() {
    const blogButtonInHamburger = document.querySelector(".hamburger-blog-button");
    const joinButtonInHamburger = document.querySelector(".hamburger-join-popup-button");

    blogButtonInHamburger.addEventListener("click", function() {
        toggleHamburgerMenu();
        goToBlogPosts();
    });

    joinButtonInHamburger.addEventListener("click", function() {
        toggleJoinPopup();
        toggleHamburgerMenu();
    });
});