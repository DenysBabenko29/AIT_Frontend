const BASE_URL = "https://jsonplaceholder.typicode.com";

printUsers();

async function printUsers() {
    try {
        await fetch(`${BASE_URL}/users`)
            .then((res) => res.json())
            .then((users) => {
                userData = users;
                users.forEach((user) => {
                    const li = document.createElement("li");
                    li.innerHTML = user.name;
                    li.addEventListener("click", () =>
                        displayUserDetails(user)
                    );
                    userList.appendChild(li);
                });
            });
    } catch (error) {
        const li = document.createElement("li");
        li.textContent = `Пользователь не найден ${error}`;
        userList.appendChild(li);
    }
}

function displayUserDetails({name: firstName, email, phone, website, company: {name}, address : {street, city}}) {
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
