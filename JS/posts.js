document.addEventListener("DOMContentLoaded", function() {
    fetchRelatedPosts();
});

function fetchRelatedPosts() {
    fetch("URL_TIL_SWAGGER_API")
        .then(response => response.json())
        .then(data => {
            const grid = document.getElementById("related-posts");
            data.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("thumbnail-item");
                postElement.innerHTML = `
                    <img src="${post.thumbnailUrl}" alt="${post.title}">
                    <h3>${post.title}</h3>
                `;
                grid.appendChild(postElement);
            });
        })
        .catch(error => console.error("Error fetching posts:", error));
}