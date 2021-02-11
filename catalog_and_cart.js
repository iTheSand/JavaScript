"use strict";

const catalog = {
    catalogBlock: null,
    cart: null,
    product: [
        {
        id_product: 77901,
        product_name: "Блок управления умным домом",
        price: 25000
        },
        {
        id_product: 77950,
        product_name: "Датчик движения",
        price: 1700
        },
        {
        id_product: 77951,
        product_name: "Датчик температуры",
        price: 1500
        },
        {
        id_product: 77952,
        product_name: "Умная розетка",
        price: 2000
        },
        {
        id_product: 77960,
        product_name: "Умная лампа",
        price: 900
        },
    ],

    init(cart) {
        this.catalogBlock = document.querySelector('.catalog-list');
        this.cart = cart;
        this.render();
        this.addEventHandlers();
    },

    render() {
    if (this.product.length) {
        this.catalogBlock.innerHTML = '';
        this.product.forEach(prod => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(prod));
        });
    } else {
        this.catalogBlock.textContent = 'Каталог пуст';
    }
    },

    renderCatalogItem(prod) {
        return `<div class="prod">
                <div><b>Артикул</b>: <br> ${prod.id_product}</div>
                <div><b>Наименование</b>: <br> ${prod.product_name}</div>
                <div><b>Цена за шт.</b>: <br> ${prod.price} р.</div>
                <button class="add-to-cart" data-id_product="${prod.id_product}">Купить</button>
            </div>`;
    },

    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket(event) {
        if (!event.target.classList.contains('add-to-cart')) return;
        const id_product = +event.target.dataset.id_product;
        this.cart.addToBasket(id_product);
    },
};


const cart = {
    cartListBlock: null,
    cartButton: null,
    cartButtonBuy: null,
    catalogList: [],
    goods: [
        {
        id_product: 77901,
        product_name: "Блок управления умным домом",
        price: 25000,
        quantity: 1
        },
        {
        id_product: 77950,
        product_name: "Датчик движения",
        price: 1700,
        quantity: 2
        },
    ],

    init(catalogList) {
        this.cartListBlock = document.querySelector('.cart');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));
        this.cartButtonBuy = document.querySelector('.cart-buy');
        this.cartButtonBuy.addEventListener('click', this.clearCart.bind(this));
        this.catalogList = catalogList;

        this.render();
    },

    render() {
        if (this.goods.length) {
            this.cartListBlock.innerHTML = '';
            this.goods.forEach(item => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.countCartItem()} товара-(ов) стоимостью ${this.getCartPrice()} рублей`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },

    renderCartItem(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    },

    findProductInCatalog(id_product) {
        return this.catalogList.find(product => product.id_product === id_product);
    },

    addToBasket(id_product) {
        const product = this.findProductInCatalog(id_product);

        if (product) {
            const findInBasket = this.goods.find(({id_product}) => product.id_product === id_product);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.goods.push({...product, quantity: 1});
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },

    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },

    clearCart() {
        this.goods = [];
        this.render();
    },

    countCartItem() {
        return this.goods.reduce((totalItem, cartItem) => totalItem += cartItem.quantity, 0);
    }
};

catalog.init(cart);
cart.init(catalog.product);
