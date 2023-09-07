let userData = [];
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
        userData = users;
        users.forEach((user) => {
            // userList.innerHTML = `<li onclick="createUserInfo(this)">user.name</li>`
            const li = document.createElement("li");
            li.innerHTML = user.name;
            userList.appendChild(li);
        });
    })
    .catch((err) => {
        const li = document.createElement("li");
        li.textContent = "Пользователь не найден";
        userList.appendChild(li);
    });
// .finally(console.log('Finish'));

userList.addEventListener("click", (el) => {
    userData.forEach((element) => {
        if (el.target.textContent === element.name) {
            userInfo.innerHTML = `
            <p>Username: ${element.username}</p>
            <p>Email: ${element.email}</p>
            <p>Website: ${element.website}</p>
            <p>Address: ${element.address.street +", " + element.address.suite +", " + element.address.city}</p>
            <p>Phone: ${element.phone}</p>`
        }
    });
})