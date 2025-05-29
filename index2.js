let row = document.querySelector("#posts-row");

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts = await response.json();

        posts.slice(0, 12).forEach((post) => {
            row.innerHTML += `
                <div class="col-md-4 mb-4 card-container">
                    <div class="card shadow-sm h-100">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-primary">${post.id}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${post.title}</h6>
                            <p class="card-text card-body-content">${post.body}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    } catch (err) {
        console.error("Failed to fetch data:", err);
        row.innerHTML = `<p class="text-danger text-center fs-5">Error loading posts: ${err.message}</p>`;
    }
};

fetchData();
