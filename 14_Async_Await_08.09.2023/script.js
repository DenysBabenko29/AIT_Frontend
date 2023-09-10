const BASE_URL = "https://jsonplaceholder.typicode.com";

const loadUsersBtn = document.getElementById("loadUsersBtn");

loadUsersBtn.addEventListener("click", async () => {
    const users = await fetchData("users");
    displayUsers(users);
});

loadPostsBtn.addEventListener('click', async () => {
    const posts = await fetchData("posts");
    displayPosts(posts);
})

async function fetchData(url) {
    try {
        const response = await fetch(`${BASE_URL}/${url}`);
        const users = response.json();
        return users;
    } catch (error) {
        console.log(`Error fetching users: ${error}`);
    }
}


function displayUsers(users) {
    usersList.innerHTML = "";
    users.forEach(({ name, phone }) => {
        const li = document.createElement("li");
        const phoneFormatted = phone.split(" ")[0];
        li.textContent = name + "   " + phoneFormatted;
        usersList.appendChild(li);
    });
}

function displayPosts(posts) {
    postsList.innerHTML = "";
    posts.forEach(({title, body}) => {
        const li = document.createElement("li");
        li.innerHTML = `<h4>${title}</h4><p>${body}</p>`;
        postsList.appendChild(li);
    });
}
