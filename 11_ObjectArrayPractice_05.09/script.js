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
    shoppingCart.items.sort();
    const li = document.createElement("li");
    li.textContent = `
        Quantity of position: ${shoppingCart.items.length},
        Total sum of all products : ${shoppingCart.totalCost},
        Total quantity of all products : ${totalQuantityOfAllProducts(
            shoppingCart.items
        )},
        MaxPrice : ${shoppingCart.items[0].price},
        MinPrice : ${shoppingCart.items[shoppingCart.items.length - 1].price},
        Avg : ${
            shoppingCart.totalCost /
            totalQuantityOfAllProducts(shoppingCart.items)
        },
        `;
    statsOur.appendChild(li);

    function totalQuantityOfAllProducts(items) {
        return items.reduce((acc, item) => acc + item.quantity, 0);
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
