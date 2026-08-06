import "./detail.css";
import { FileText, MessageCircle, ShoppingCart } from "lucide-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../ui/cart/cart";
import { toast } from "react-toastify";
const Detail = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState([]);
    const [mainImage, setMainImage] = useState("");
    const [count, setCount] = useState(1);
    const totalPrice = Number(product?.discountedPrice || 0) * count;
    const { cartCount, setCartCount } = useContext(CartContext);


    function handeAddCart(product, quantity) {
        let cart = JSON.parse(localStorage.getItem("cartProducts")) || [];

        const exist = cart.find((item) => item.id === product.id);

        if (exist) {
            exist.quantity += quantity;
        } else {
            cart.push({
                ...product,
                quantity,
            });
        }

        localStorage.setItem("cartProducts", JSON.stringify(cart));
    }

    const handleCart = () => {
        handeAddCart(product, count);
        setCartCount(cartCount + 1);
        toast.success("Savatga qo'shildi!");
    };
    const minusClick = () => {
        setCount(count + 1);
    };
    const pushClick = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(
                    "https://uzum-api.onrender.com/api/products"
                );
                const data = await res.json();
                const found = data.data.find(
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
        return <h2 style={{ marginLeft: "140px" }}>Loading...</h2>;
    }
    return (

        <>
            <div className="aaa">
                <div className="bbb">
                    <div className="ccc">
                        <img src={product.imageUrl} alt={product.name} />
                    </div>
                    <div className="ddd">
                    </div>
                </div>
                <div className="ggg">
                    <span className="hhh">
                        Yangi mahsulot
                    </span>
                    <p className="iii">
                        Slug: {product.slug}
                    </p>
                    <h1 className="jjj">
                        {product.name}
                    </h1>
                    <div className="kkk">
                        <span>⭐⭐⭐⭐⭐ 4.8</span>
                        <span>124 ta sharh</span>
                        <span>500+ sotilgan</span>
                    </div>
                    <div className="lll">
                        <div className="mmm">
                            <p>1-10 dona</p>
                            <h2>{totalPrice.toLocaleString()} {product.currency}</h2>
                        </div>
                        <div className="mmm nnn">
                            <div>Ommabop</div>
                            <p>11-50 dona</p>
                            <h2>{totalPrice.toLocaleString()} {product.currency}</h2>
                        </div>
                        <div className="mmm">
                            <p>50+ dona</p>
                            <h2>{totalPrice.toLocaleString()} {product.currency}</h2>
                        </div>
                    </div>
                    <div className="ooo">
                        <h3>Ulgurji narxlar</h3>
                        <span>MOQ: {product.minOrderQuantity} dona</span>
                    </div>
                    <div className="ppp">
                        <h4>Konfiguratsiyani tanlang</h4>
                        <div className="qqq">
                            <button className="rrr">8GB/256GB Silver</button>
                            <button className="sss">16GB/512GB Gray</button>
                            <button className="sss">32GB/1TB Gold</button>
                        </div>
                        <div className="ttt">
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                    </div>
                    <div className="uuu">
                        <div className="vvv">
                            <div className="www">
                                T
                            </div>
                            <div>
                                <h4>TechnoMach Tashkent MCHJ</h4>
                                <p>Toshkent, UZ • 8 yillik tajriba</p>
                            </div>
                        </div>
                        <button className="xxx">
                            Do'konni ko'rish
                        </button>
                    </div>

                </div>
            </div>

            <div className="yyy">
                <div className="zzz">
                    <span className="aaaa">Tavsif</span>
                    <span>Yetkazib berish</span>
                    <span>Sharhlar (124)</span>
                </div>

                <div className="bbbb">

                    <h2>Mahsulot haqida ma'lumot</h2>

                    <p>
                        {product.description}
                    </p>

                    <div className="cccc">

                        <div className="dddd">
                            <small>QUVVATI</small>
                            <h4>5.5 kW / 7.5 HP</h4>
                        </div>

                        <div className="dddd">
                            <small>TEZLIGI</small>
                            <h4>0.5 - 2.0 m/s</h4>
                        </div>

                        <div className="dddd">
                            <small>YUK KO'TARISHI</small>
                            <h4>500 kg</h4>
                        </div>

                        <div className="dddd">
                            <small>KAFOLAT</small>
                            <h4>24 oy</h4>
                        </div>

                    </div>

                </div>
                <div className="eeee">
                    <div>
                        <div>Umumiy miqdor:</div>
                        <h2>{totalPrice.toLocaleString()} {product.currency}</h2>
                    </div>
                    <div className="ffff">
                        <div className="jet">
                            <button onClick={() => count > 0 && setCount(count - 1)}>
                                -
                            </button>
                            <button>{count}</button>
                            <button onClick={() => setCount(count + 1)}>
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
                            Chat orqali yozish
                        </div>

                        <div>
                            <FileText
                                size={14}
                                style={{ marginRight: "8px" }}
                            />
                            <span>RFQ</span>
                        </div>

                        <button onClick={handleCart} style={{ background: "orange" }} className="hhhh">
                            <ShoppingCart
                                size={19}
                                style={{ marginRight: "8px" }}
                            />
                            Savatga qo'shish
                        </button>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Detail;