import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

function Product({ id, price, rating, title, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    alert("product added to cart");
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        price: price,
        rating: rating,
        title: title,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarRoundedIcon />
              </p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
