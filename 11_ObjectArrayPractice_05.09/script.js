const shoppingCart = {
    items: [],
    totalCost: 0,
    addItem(item) {
        const existingItem = this.items.find((e) => e.name === item.name);
        if (existingItem) {
            existingItem.quantity += item.quantity;
            if (existingItem.price < item.price) {
                existingItem.price = item.price;
            }
        } else {
            this.items.push(item);
        }
        this.updateTotalCost();
    },
    removeItem(itemName) {
        const index = this.items.findIndex(
            (element) => element.name === itemName
        );
        if (index != -1) {
            this.items.splice(index, 1);
            this.updateTotalCost();
        }
    },
    updateTotalCost() {
        this.totalCost = this.items.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
    },
};

add.onclick = addHandler;
stats.onclick = statsHandler;

function statsHandler() {
    // Кол-во позиций;
    // Итоговая стоимость всех продуктов;
    // Итоговое кол-во всех продуктов;
    // Максимальная цена
    // Минимальная цена
    // Средняя цена
    if (shoppingCart.items.length) {
        const itemsQuantity = shoppingCart.items.length;
        const sortByPrice = shoppingCart.items.sort();
        const totalQuantityProduct = shoppingCart.items.reduce(
            (acc, item) => acc + item.quantity,
            0
        );

        let maxPrice = 0;
        let minPrice = 0;
        shoppingCart.items.forEach((e) => {
            if (e.price > maxPrice) {
                maxPrice = e.price;
            }
            if (e.price < minPrice) {
                minPrice = e.price;
            }
        });

        statsOur.innerHTML = `
        <li>Quantity of position: ${itemsQuantity}</li>
        <li>Total sum of all products : ${shoppingCart.totalCost}</li>
        <li>Total quantity of all products : ${totalQuantityProduct}</li>
        <li>MaxPrice : ${maxPrice}</li>
        <li>MinPrice : ${minPrice}</li>
        <li>Avg : ${shoppingCart.totalCost / totalQuantityProduct}</li>
        `;
    } else {
        statsOur.innerHTML = "<p>The shopping cart is empty</p>";
    }
}

function addHandler() {
    if (
        productName.value.trim() &&
        price.value.trim() &&
        quantity.value.trim()
    ) {
        shoppingCart.addItem({
            name: productName.value.trim(),
            price: +price.value.trim(),
            quantity: +quantity.value.trim(),
        });
        productList.innerHTML = "";

        shoppingCart.items.forEach((e) => {
            const li = document.createElement("li");
            li.textContent = `
            Product name : ${e.name},
            Product price : ${e.price},
            Product quantity : ${e.quantity}
            `;
            productList.appendChild(li);

            productName.value = '';
            price.value = '';
            quantity.value = '';
        });
    }
}
