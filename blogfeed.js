document.addEventListener("DOMContentLoaded", function() {
    // Sørger for hover-effekt på desktop og permanent blurry på mobil
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("mouseover", function(event) {
            if (window.innerWidth > 768) {
                // Legger til hover-effekt for desktop
                const img = event.currentTarget.querySelector("img");
                const text = event.currentTarget.querySelector(".thumbnail-text");
                img.style.filter = "blur(13px) brightness(0.7)";
                text.style.opacity = "1";
            }
        });

        thumbnail.addEventListener("mouseout", function(event) {
            if (window.innerWidth > 768) {
                // Fjerner hover-effekten for desktop
                const img = event.currentTarget.querySelector("img");
                const text = event.currentTarget.querySelector(".thumbnail-text");
                img.style.filter = "none";
                text.style.opacity = "0";
            }
        });
    });

    // Sørger for at mobilversjonen alltid er blurry med teksten synlig
    function setMobileThumbnailEffect() {
        if (window.innerWidth <= 768) {
            thumbnails.forEach(thumbnail => {
                const img = thumbnail.querySelector("img");
                const text = thumbnail.querySelector(".thumbnail-text");
                img.style.filter = "blur(4px) brightness(0.7)";
                text.style.opacity = "1";
            });
        }
    }

    // Initialiser mobil-effekten og lytt til vinduendringer
    setMobileThumbnailEffect();
    window.addEventListener("resize", setMobileThumbnailEffect);
});