import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./store.css";
import { ShoppingCart } from "lucide-react";
import { useTranslation } from "react-i18next";

const Store = () => {
    const { slug } = useParams();
    const { t } = useTranslation();

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    const getProducts = [
        {
            img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQw1s555sKAW4Zn-D-TsYN6NmebrNaGmi0ffSG9aIf7Ge1okjVnREGglqFtkAdncW2TTKWZCaYjztZpZo8wULas5G1xzaNZ2QtquuK5EsRkj7kyMn34uBht7niyfgXsYvGy&usqp=CAc",
            name: "product_1",
            price: "$5.20 - $8.00",
            quantity: "100",
            unit: "pieces",
            badge: "new_product"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBzX9_w3LY5SRHzstXn_Y0ZccSC81rTCyhkFq08lHiPw&s=10",
            name: "product_2",
            price: "$14.50 - $18.20",
            quantity: "50",
            unit: "pairs",
            badge: "in_stock"
        },
        {
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaudJ7SDbDkwyL1invT5jDGGij9KiMGEeAIZ23AnmrvWQ6EETj-bQXDIssHQiIn-BbWcDULilgo4PHDwCxR32QNpY144KbPVAfsLwOcPvpMHgOnlho2v_oXeRHmWHJsRhBb8KMyQ&usqp=CAc",
            name: "product_3",
            price: "$25.00 - $32.00",
            quantity: "20",
            unit: "pieces",
            badge: "top_selling"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUc2IBr6rHmbcEqPgMsnRiciRgNciP8AdfzXsm_pq-Tw&s=10",
            name: "product_4",
            price: "$45.00 - $60.00",
            quantity: "10",
            unit: "sets",
            badge: "customizable"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Lhsks30FKmXnqSiWcCM7uij7CPgmfXdjfDsHT7Oivw&s=10",
            name: "product_5",
            price: "$3.40 - $5.10",
            quantity: "200",
            unit: "pieces",
            badge: "eco_friendly"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAbxJg56uoWYQxMxXNM_CyOUQvcJ6YYok60flxyb_Sg&s=10",
            name: "product_6",
            price: "$12.00 - $15.00",
            quantity: "50",
            unit: "pieces",
            badge: "fast_shipping"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwUD1tu1NN71857c2i75pTiqJ_FbvuAg4CoxlLXsxZ_w&s=10",
            name: "product_7",
            price: "$1.50 - $2.80",
            quantity: "500",
            unit: "pieces",
            badge: "safety_certified"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSka6Svbpm74Hdn2TNNfy47-9dw0LkQk1dLSVdKCYERAg&s",
            name: "product_8",
            price: "$0.45 - $0.70",
            quantity: "1000",
            unit: "pairs",
            badge: "bulk_ready"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQnp8LxnXF2HPQgwJkbXNf8xUn2SfcZ07yaj1I9rBb_L4lhPcDdsMMxQ6F-S9IcVLNWNgai_y8R6UZWXf0G3zuiCtZC8ZLrsC3oMDyOwtDvP5IbTFn_&usqp=CAc",
            name: "product_9",
            price: "$8.20 - $11.50",
            quantity: "50",
            unit: "pairs",
            badge: "in_stock"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmLjd8go6Mg1hQZYszvTjRHhjCqSS4TypdJrRxsBIy4Q&s",
            name: "product_10",
            price: "$6.80 - $9.30",
            quantity: "50",
            unit: "pairs",
            badge: "in_stock"
        }
    ];

    useEffect(() => {
        const fetchSeller = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    "https://uzum-api.onrender.com/api/sellers"
                );

                const result = await res.json();

                const seller = result?.data?.find(
                    (item) => item.slug === slug
                );

                setProducts(seller);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchSeller();
    }, [slug]);

    if (loading) {
        return (
            <h2 style={{ marginLeft: "140px" }}>
                {t("loading")}
            </h2>
        );
    }

    if (!products) {
        return <h2>{t("seller_not_found")}</h2>;
    }

    return (
        <>
            <div className="breadcrumb">

                <span>
                    {t("home")}
                </span>

                {" / "}

                <span>
                    {t("suppliers")}
                </span>

                <b>
                    {products.name}
                </b>

            </div>

            <div className="store-container">

                <div className="store-card">

                    <div className="store-logo">
                        <img
                            src={products.logoUrl}
                            alt={products.name}
                        />
                    </div>

                    <div className="store-info">

                        <h2>
                            {products.name}
                        </h2>

                        <span className="badge">
                            {products.slug}
                        </span>

                        <p>
                            📍 {products.location}
                        </p>

                        <div className="meta-info">

                            <p>
                                ⭐ 4.8 (120 {t("reviews")})
                            </p>

                            <p>
                                {products.experienceLabel}
                            </p>

                        </div>

                        <p>
                            ⚡ {products.reliabilityScore}%{" "}
                            {t("response_rate")}
                        </p>

                    </div>

                    <div className="store-actions">

                        <button className="btn btn-follow">
                            + {t("follow")}
                        </button>

                        <button className="btn btn-msg">
                            {t("send_message")}
                        </button>

                    </div>

                </div>

                <div className="products-grid">

                    {getProducts.map((item, index) => (

                        <div
                            className="product-card"
                            key={index}
                        >

                            <img
                                src={item.img}
                                alt={t(item.name)}
                            />

                            <div className="p-info">

                                <p className="p-name">
                                    {t(item.name)}
                                </p>

                                <h3 className="p-price">
                                    {item.price}
                                </h3>

                                <p className="p-moq">
                                    {t("moq")}: {item.quantity}{" "}
                                    {t(item.unit)}
                                </p>

                                <div className="p-footer">

                                    <span className="p-badge">
                                        {t(item.badge)}
                                    </span>

                                    <button
                                        className="cart-btn"
                                    >
                                        <ShoppingCart />
                                    </button>

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