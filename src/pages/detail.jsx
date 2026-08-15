import "./detail.css";
import { FileText, MessageCircle, ShoppingCart } from "lucide-react";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../ui/cart/cart";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
const Detail = () => {
    const { t } = useTranslation();
    const { slug } = useParams();
    const [product, setProduct] = useState([]);
    const [mainImage, setMainImage] = useState("");
    const [count, setCount] = useState(1);
    const totalPrice =
        Number(product?.discountedPrice || 0) * count;
    const { cartCount, setCartCount } =
        useContext(CartContext);
    function handeAddCart(product, quantity) {
        let cart =
            JSON.parse(localStorage.getItem("cartProducts")) || [];
        const exist =
            cart.find((item) => item.id === product.id);
        if (exist) {
            exist.quantity += quantity;
        } else {
            cart.push({
                ...product,
                quantity,
            });
        }
        localStorage.setItem(
            "cartProducts",
            JSON.stringify(cart)
        );
    }
    const handleCart = () => {
        handeAddCart(product, count);
        setCartCount(cartCount + 1);
        toast.success(t("added_to_cart"));
    };
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(
                    "https://uzum-api.onrender.com/api/products"
                );
                const data = await res.json();
                const found =
                    data.data.find(
                        (item) => item.slug === slug
                    );
                setProduct(found);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProduct();
    }, [slug]);
    if (!product) {

        return (
            <h2 style={{ marginLeft: "140px" }}>
                {t("loading")}...
            </h2>
        );
    }
    return (
        <>
            <div className="aaa">
                <div className="bbb">
                    <div className="ccc">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                        />
                    </div>
                    <div className="ddd">
                    </div>
                </div>
                <div className="ggg">
                    <span className="hhh">
                        {t("new_product")}
                    </span>
                    <p className="iii">
                        {t("slug")}: {product.slug}
                    </p>
                    <h1 className="jjj">
                        {product.name}
                    </h1>
                    <div className="kkk">
                        <span>
                            ⭐⭐⭐⭐⭐ 4.8
                        </span>
                        <span>
                            124 {t("reviews")}
                        </span>
                        <span>
                            500+ {t("sold")}
                        </span>
                    </div>
                    <div className="lll">
                        <div className="mmm">
                            <p>
                                1-10 {t("pieces")}
                            </p>
                            <h2>
                                {totalPrice.toLocaleString()}{" "}
                                {product.currency}
                            </h2>
                        </div>
                        <div className="mmm nnn">
                            <div>
                                {t("popular")}
                            </div>
                            <p>
                                11-50 {t("pieces")}
                            </p>
                            <h2>
                                {totalPrice.toLocaleString()}{" "}
                                {product.currency}
                            </h2>
                        </div>
                        <div className="mmm">
                            <p>
                                50+ {t("pieces")}
                            </p>
                            <h2>
                                {totalPrice.toLocaleString()}{" "}
                                {product.currency}
                            </h2>
                        </div>
                    </div>
                    <div className="ooo">
                        <h3>
                            {t("wholesale_prices")}
                        </h3>
                        <span>
                            {t("moq")}:{" "}
                            {product.minOrderQuantity}{" "}
                            {t("pieces")}
                        </span>
                    </div>
                    <div className="ppp">
                        <h4>
                            {t("choose_configuration")}
                        </h4>
                        <div className="qqq">
                            <button className="rrr">
                                8GB/256GB Silver
                            </button>
                            <button className="sss">
                                16GB/512GB Gray
                            </button>
                            <button className="sss">
                                32GB/1TB Gold
                            </button>
                        </div>
                        <div className="ttt">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                            />
                        </div>
                    </div>
                    <div className="uuu">
                        <div className="vvv">
                            <div className="www">
                                T
                            </div>
                            <div>
                                <h4>
                                    TechnoMach Tashkent MCHJ
                                </h4>
                                <p>
                                    Toshkent, UZ • 8{" "}
                                    {t("years_experience")}
                                </p>
                            </div>
                        </div>
                        <button className="xxx">
                            {t("store")}
                        </button>
                    </div>
                </div>
            </div>
            <div className="yyy">
                <div className="zzz">
                    <span className="aaaa">
                        {t("description")}
                    </span>
                    <span>
                        {t("shipping")}
                    </span>
                    <span>
                        {t("reviews_tab")} (124)
                    </span>
                </div>
                <div className="bbbb">
                    <h2>
                        {t("product_information")}
                    </h2>
                    <p>
                        {product.description}
                    </p>
                    <div className="cccc">
                        <div className="dddd">
                            <small>
                                {t("power")}
                            </small>
                            <h4>
                                5.5 kW / 7.5 HP
                            </h4>
                        </div>
                        <div className="dddd">
                            <small>
                                {t("speed")}
                            </small>
                            <h4>
                                0.5 - 2.0 m/s
                            </h4>
                        </div>
                        <div className="dddd">
                            <small>
                                {t("load_capacity")}
                            </small>
                            <h4>
                                500 kg
                            </h4>
                        </div>
                        <div className="dddd">
                            <small>
                                {t("warranty")}
                            </small>
                            <h4>
                                24 oy
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="eeee">
                    <div>
                        <div>
                            {t("total_quantity")}
                        </div>
                        <h2>
                            {totalPrice.toLocaleString()}{" "}
                            {product.currency}
                        </h2>
                    </div>
                    <div className="ffff">
                        <div className="jet">
                            <button
                                onClick={() =>
                                    count > 0 &&
                                    setCount(count - 1)
                                }
                            >
                                -
                            </button>
                            <button>
                                {count}
                            </button>
                            <button
                                onClick={() =>
                                    setCount(count + 1)
                                }
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="gggg">
                        <div>
                            <MessageCircle
                                size={16}
                                style={{
                                    marginRight: "8px",
                                    color: "orange",
                                }}
                            />
                            {t("chat")}
                        </div>
                        <div>
                            <FileText
                                size={14}
                                style={{
                                    marginRight: "8px"
                                }}
                            />
                            <span>
                                {t("rfq")}
                            </span>

                        </div>
                        <button
                            onClick={handleCart}
                            style={{
                                background: "orange"
                            }}
                            className="hhhh"
                        >
                            <ShoppingCart
                                size={19}
                                style={{
                                    marginRight: "8px"
                                }}
                            />
                            {t("add_to_cart")}

                        </button>

                    </div>

                </div>

            </div>

        </>

    );

};

export default Detail;