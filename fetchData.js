const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW5raWlpbiIsImVtYWlsIjoiYW5uaGFtNDkzNDRAc3R1ZC5ub3JvZmYubm8iLCJpYXQiOjE3MzAxNDUxNTZ9.T6ygDGizewBV9q2iNAwVtO_bTa9J3bDbnLcUMCrF0EgA";

// Funksjon for å generere en tilfeldig dato mellom to datoer
function generateRandomDate(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  return randomDate.toLocaleDateString("no-NO");
}

async function fetchPosts() {
  try {
    const response = await fetch('https://v2.api.noroff.dev/blog/posts/ankiiin', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });

    if (!response.ok) {
      throw new Error("Nettverksresponsen var ikke ok");
    }

    const result = await response.json();
    console.log("API-respons:", result);

    const data = result.data;
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = ""; // Tøm containeren før nye innlegg legges til

    data.forEach(post => createPostElement(post, postsContainer));

  } catch (error) {
    console.error("Det var en feil med fetch-operasjonen:", error);
  }
}

function createPostElement(post, container) {
  const postElement = document.createElement("div");
  postElement.classList.add("post");

  // Generer en tilfeldig dato for hvert innlegg
  const postDate = generateRandomDate("2024-01-01", "2024-12-31");

  postElement.innerHTML = `
    <h2>${post.title || "Ingen tittel"}</h2>
    <p><strong>Skrevet av</strong> ${post.author?.name || "Ukjent forfatter"} <strong>den</strong> ${postDate}</p>
    <p>${post.body || "Ingen innhold"}</p>
    <div class="tags">${(post.tags || []).map(tag => `<span class="tag">${tag}</span>`).join(" ")}</div>
    <img src="${post.media?.url || ""}" alt="${post.media?.alt || "Bilde mangler"}" />
  `;

  container.appendChild(postElement);
}

// Kall fetchPosts én gang ved DOMContentLoaded og fjern event-listeneren etterpå
document.addEventListener("DOMContentLoaded", function handler() {
  fetchPosts();
  document.removeEventListener("DOMContentLoaded", handler);
});