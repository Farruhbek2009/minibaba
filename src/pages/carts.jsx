import React, { useEffect, useState } from "react";
import "./carts.css";

const Carts = () => {
    const [cart, setCart] = useState([]);
    const [discount, setDiscount] = useState(0);
    const deliveryFee = 20;
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("cartProducts")) || [];
        setCart(data);
    }, []);

    const updateLocalStorage = (newCart) => {
        setCart(newCart);
        localStorage.setItem("cartProducts", JSON.stringify(newCart));
    };

    const increase = (id) => {
        const newCart = cart.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        updateLocalStorage(newCart);
    };

    const decrease = (id) => {
        const newCart = cart.map((item) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        updateLocalStorage(newCart);
    };

    const removeItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        updateLocalStorage(newCart);
    };


    const subtotal = cart.reduce((sum, item) => {
        return sum + item.discountedPrice * item.quantity;
    }, 0);

    const total = subtotal + deliveryFee - discount;

    if (cart.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Savat bo'sh</h2>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h1 className="cart-title">My Shopping Cart</h1>

            <div className="cart-table-header">
                <span>Product</span>
                <span>Size</span>
                <span>Quantity</span>
                <span>Price</span>
                <span></span>
            </div>

            {cart.map((item) => (
                <div className="cart-card" key={item.id}>
                    <div className="cart-product-info">
                        <img src={item.imageUrl} alt={item.name} />
                        <div>
                            <h3>{item.name}</h3>
                            <p>Product ID: {item.slug || item.id}</p>
                        </div>
                    </div>

                    <div className="cart-size">
                        <span>{item.size ||  "L"}</span>
                    </div>

                    <div className="quantity">
                        <button onClick={() => decrease(item.id)}>-</button>
                        <span>{item.quantity < 10 ? `0${item.quantity}` : item.quantity}</span>
                        <button onClick={() => increase(item.id)}>+</button>
                    </div>

                    <div className="cart-price">
                        <h2>${(item.discountedPrice * item.quantity).toFixed(2)}</h2>
                    </div>

                    <button
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}
                    >
                        ✕
                    </button>
                </div>
            ))}

            <div className="cart-summary-grid">
                <div className="summary-left-box">
                    <div className="summary-row">
                        <span>Discount</span>
                        <span>${discount.toFixed(2)}</span>
                    </div>
                    <hr />
                    <div className="summary-row">
                        <span>Delivery</span>
                        <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                </div>

                <div className="summary-right-box">
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <hr />
                    <div className="summary-row total-row">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <div className="promo-section">
                <div className="promo-input-group">
                    <input type="text"  placeholder="Please enter promo code" onChange={(e) => setPromoCode(e.target.value)} />
                    <button>Apply Discount</button>
                </div>
            </div>
            <div className="cart-actions">
                <button className="back-shop-btn" >
                    Back to Shop
                </button>
                <button className="checkout-btn" >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Carts;