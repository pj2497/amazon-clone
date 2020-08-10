import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
import { getBasketTotal } from "./Reducer";
import { Link } from "react-router-dom";

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong></strong>
            </p>

            <small className="subtotal_gift">
              <input className="subtotal_input" type="checkbox" />
              This Order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />

      <Link to="/thankyou">
        <div>
          <button className="subtotal_button">Proceed To Checkout</button>
        </div>
      </Link>
    </div>
  );
}

export default Subtotal;
