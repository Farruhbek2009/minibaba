import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import api from "../axios/axios";
import { useNavigate } from "react-router-dom";
import "./card.css";
import { toast } from 'react-toastify'
const Card = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await api.get("/products");
                setProducts(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="middle">
            <div className="e">

                {products.map((product) => (

                    <div
                        key={product.id}
                        className="g"
                        onClick={() => navigate(`/detail/${product.slug}`)}
                        style={{ cursor: "pointer" }}
                    >

                        <div className="h">

                            {product.discountPercent > 0 && (
                                <span className="i">
                                    -{product.discountPercent}%
                                </span>
                            )}

                            <img
                                src={product.imageUrl}
                                alt={product.name}
                            />

                        </div>

                        <div className="j">

                            <h3 className="k">
                                {product.name}
                            </h3>

                            <p
                                style={{
                                    fontSize: "12px",
                                    color: "#888",
                                }}
                            >
                                {product.slug}
                            </p>

                            <h3 className="k">
                                Minimal buyurtma: {product.minOrderQuantity}
                            </h3>

                            <p className="l">
                                {product.discountedPrice} {product.currency}
                            </p>

                            <div className="n">

                                <div className="o">
                                    <Check
                                        size={10}
                                        strokeWidth={3}
                                    />
                                </div>

                                <div>
                                    {product.isVerifiedSeller
                                        ? "Tasdiqlangan"
                                        : "Tasdiqlanmagan"}
                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>
        </div>
    );
};

export default Card;