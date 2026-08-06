import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./store.css";

const Store = () => {
    const { slug } = useParams();
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const getProducts = [
        {
            img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQw1s555sKAW4Zn-D-TsYN6NmebrNaGmi0ffSG9aIf7Ge1okjVnREGglqFtkAdncW2TTKWZCaYjztZpZo8wULas5G1xzaNZ2QtquuK5EsRkj7kyMn34uBht7niyfgXsYvGy&usqp=CAc",
            coment: "Premium Paxta Matoli Ko'ylak - Oq…",

            price: "$5.20 - $8.00",
            data: "MOQ: 100 DONA",
            isnew: "Yangi toplam",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBzX9_w3LY5SRHzstXn_Y0ZccSC81rTCyhkFq08lHiPw&s=10", coment: "Erkaklar Professional Sport…",
            price: "$14.50 - $18.20",
            data: "MOQ: 50 JUFT",
            isnew: "In Stock new",
        },
        {
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaudJ7SDbDkwyL1invT5jDGGij9KiMGEeAIZ23AnmrvWQ6EETj-bQXDIssHQiIn-BbWcDULilgo4PHDwCxR32QNpY144KbPVAfsLwOcPvpMHgOnlho2v_oXeRHmWHJsRhBb8KMyQ&usqp=CAc",
            coment: "Haqiqiy Charm Ayollar Sumkasi",
            price: "$25.00 - $32.00",
            data: "MOQ: 20 DONA",
            isnew: "Top Selling fresh",
        },
        {

            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUc2IBr6rHmbcEqPgMsnRiciRgNciP8AdfzXsm_pq-Tw&s=10", coment: "Qurilish Asboblari To'plami (82 bo'lak)",
            price: "$45.00 - $60.00",
            data: "MOQ: 10 TO'PLAM",
            isnew: "Customizable in",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Lhsks30FKmXnqSiWcCM7uij7CPgmfXdjfDsHT7Oivw&s=10",
            coment: "Oshxona Anjomlari To'plami - Silikon",
            price: "$3.40 - $5.10",
            data: "MOQ: 200 DONA",
            isnew: "Eco Friendly top ",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAbxJg56uoWYQxMxXNM_CyOUQvcJ6YYok60flxyb_Sg&s=10",
            coment: "Simsiz Quloqchinlar - V5.3 Bluetooth",
            price: "$12.00 - $15.00",
            data: "MOQ: 50 DONA",
            isnew: "Fast Shipping with",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwUD1tu1NN71857c2i75pTiqJ_FbvuAg4CoxlLXsxZ_w&s=10",
            coment: "Yog'ochdan Bolalar O'yinchoqlari",
            price: "$1.50 - $2.80",
            data: "MOQ: 500 DONA",
            isnew: "Safety Certified",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSka6Svbpm74Hdn2TNNfy47-9dw0LkQk1dLSVdKCYERAg&s",
            coment: "Sifatli Paypoqlar - 100% Paxta",
            price: "$0.45 - $0.70",
            data: "MOQ: 1000 JUFT",
            isnew: "Bulk Ready all of",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQnp8LxnXF2HPQgwJkbXNf8xUn2SfcZ07yaj1I9rBb_L4lhPcDdsMMxQ6F-S9IcVLNWNgai_y8R6UZWXf0G3zuiCtZC8ZLrsC3oMDyOwtDvP5IbTFn_&usqp=CAc",
            coment: "Noutbuk uchun sumka va…",
            price: "$8.20 - $11.50", data: "MOQ: 50 JUFT",
            isnew: "In Stock off all",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmLjd8go6Mg1hQZYszvTjRHhjCqSS4TypdJrRxsBIy4Q&s",
            coment: "Shishali Oziq-ovqat Idishlari To'plami",
            price: "$6.80 - $9.30",
            data: "MOQ: 50 JUFT",
            isnew: "In Stock here with",
        }

    ];
    useEffect(() => {
        const fetchSeller = async () => {
            try {
                setLoading(true);

                const res = await fetch("https://uzum-api.onrender.com/api/sellers");
                const result = await res.json();

                const seller = result?.data?.find(
                    (item) => item.slug === slug
                );
                setProducts(seller);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };
        fetchSeller();
    }, [slug]);

    if (loading) {
        return <h2 style={{marginLeft:"140px"}}>Loading...</h2>;
    }

    if (!products) {
        return <h2>Seller topilmadi!</h2>;
    }

    return (
        <>
            <div className="breadcrumb">
                <span>Asosiy</span> / <span>Yetkazib beruvchilar</span>
                <b>{products.name}</b>
            </div>
            <div className="store-container">
                <div className="store-card">
                    <div className="store-logo">
                        <img src={products.logoUrl} alt={products.name} />
                    </div>
                    <div className="store-info">
                        <h2>{products.name}</h2>
                        <span className="badge">{products.slug}</span>
                        <p>📍 {products.name}</p>
                        <div className="meta-info">
                            <p>⭐ 4.8 (120 ta sharh)</p>
                            <p>{products.experienceLabel}</p>
                        </div>
                        <p>⚡ {products.reliabilityScore} % Javob darajasi </p>
                    </div>
                    <div className="store-actions">
                        <button className="btn btn-follow">+ Follow</button>
                        <button className="btn btn-msg">
                            Xabar yuborish
                        </button>
                    </div>
                </div>
                <div className="products-grid">
                    {getProducts.map((item, index) => (
                        <div className="product-card" key={index}>
                            <img src={item.img} alt={item.coment} />

                            <div className="p-info">
                                <p className="p-name">{item.coment}</p>

                                <h3 className="p-price">{item.price}</h3>

                                <p className="p-moq">{item.data}</p>

                                <div className="p-footer">
                                    <span className="p-badge">
                                        {item.isnew}
                                    </span>
                                    <button className="cart-btn">🛒</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Store;