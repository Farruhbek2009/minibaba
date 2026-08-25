import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./buyurtma.css";

const Orders = () => {
  const location = useLocation();
  const [product, setProduct] = useState(location.state);

  const cancelOrder = () => {
    setProduct(null);
  };

  if (!product) {
    return (
      <div className="noow">
        <h2>Hozircha buyurtma yo‘q</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Buyurtma</h1>

      <div>
        <img
          src={product.imageUrl}
          alt={product.name}
          width="200"
        />
        <h2>{product.name}</h2>
        <p>
          ID: {product.slug || product.id}
        </p>
        <p>
          Razmer: {product.size || "L"}
        </p>
        <p>
          Miqdor: {product.quantity}
        </p>

        <p>
          Narx: $
          {(
            product.discountedPrice *
            product.quantity
          ).toFixed(2)}
        </p>

        <button
          className="cancel-order"
          onClick={cancelOrder}
        >
          Bekor qilish
        </button>
      </div>
    </div>
  );
};

export default Orders;