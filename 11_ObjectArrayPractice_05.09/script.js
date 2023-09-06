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
        const li = document.createElement("li");
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

        li.textContent = `
        Quantity of position: ${itemsQuantity},
        Total sum of all products : ${shoppingCart.totalCost},
        Total quantity of all products : ${totalQuantityProduct},
        MaxPrice : ${maxPrice},
        MinPrice : ${minPrice},
        Avg : ${shoppingCart.totalCost / totalQuantityProduct},
        `;
        statsOur.appendChild(li);
    }
}

function addHandler() {
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
    });
}
