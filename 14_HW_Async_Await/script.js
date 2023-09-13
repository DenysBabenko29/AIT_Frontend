const BASE_URL = "https://jsonplaceholder.typicode.com";
const users = [];

(async function printUsers() {
    try {
        const res = await fetch(`${BASE_URL}/users`);
        const users = await res.json();
        users.forEach((user) => {
            const li = document.createElement("li");
            li.innerHTML = user.name;
            li.addEventListener("click", () => displayUserDetails(user));
            userList.appendChild(li);
        });

        // let filteredUsers = users;
        // displaySearchUsers(users);

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            let filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm))
            displaySearchUsers(filteredUsers);
        })
    } catch (error) {
        const li = document.createElement("li");
        li.textContent = `Пользователь не найден ${error}`; 
        userList.appendChild(li);
    }
})();

function displaySearchUsers(users){
    userList2.innerHTML = ""; 
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        li.addEventListener('click', () => {
            displayUserDetails(user); 
        })
        userList2.appendChild(li);

    })
}

function displayUserDetails({
    name: firstName,
    email,
    phone,
    website,
    company: { name },
    address: { street, city },
}) {
    userInfo.innerHTML = `
        <h2>${firstName}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Company:</strong> ${name}</p>
        <p><strong>Address:</strong> ${street}, ${city}</p>
    `;
    userInfo.style.backgroundColor = "#f1f1f1";
}
