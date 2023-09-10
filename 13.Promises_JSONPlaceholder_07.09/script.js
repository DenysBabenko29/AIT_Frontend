const BASE_URL = "https://jsonplaceholder.typicode.com";

fetch(`${BASE_URL}/users`)
    .then((res) => res.json())
    .then((users) => {
        userData = users;
        users.forEach((user) => {
            const li = document.createElement("li");
            li.innerHTML = user.name;
            li.addEventListener("click", () => displayUserDetails(user));
            userList.appendChild(li);
        });
    })
    .catch((err) => {
        const li = document.createElement("li");
        li.textContent = "Пользователь не найден";
        userList.appendChild(li);
    });


function displayUserDetails(user) {
    userInfo.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> ${user.website}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
    `;
    userInfo.style.backgroundColor = "#f1f1f1";
}

// let userData = [];
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((users) => {
//         userData = users;
//         users.forEach((user) => {
//             // userList.innerHTML = `<li onclick="createUserInfo(this)">user.name</li>`
//             const li = document.createElement("li");
//             li.innerHTML = user.name;
//             userList.appendChild(li);
//         });
//     })
//     .catch((err) => {
//         const li = document.createElement("li");
//         li.textContent = "Пользователь не найден";
//         userList.appendChild(li);
//     });
// // .finally(console.log('Finish'));

// userList.addEventListener("click", (el) => {
//     userData.forEach((element) => {
//         if (el.target.textContent === element.name) {
//             userInfo.innerHTML = `
//             <p>Username: ${element.username}</p>
//             <p>Email: ${element.email}</p>
//             <p>Website: ${element.website}</p>
//             <p>Address: ${element.address.street +", " + element.address.suite +", " + element.address.city}</p>
//             <p>Phone: ${element.phone}</p>`
//         }
//     });
// })
