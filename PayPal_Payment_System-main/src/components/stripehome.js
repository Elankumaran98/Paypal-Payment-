import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

export default function StripeHome() {
  const [product, setProduct] = useState({
    name: "P01",
    price: 10,
    productBy: "Gypzeez",
  });
  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`http://localhost:7777/pay`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("Response", response);
        const { status } = response;
        console.log("Status", status);
      })
      .catch((error) => console.log("Error", error));
  };
  return (
    <div>
      <h3>Stripe Payment</h3>
      <StripeCheckout
        stripeKey="pk_test_51Jfc2aKsqvt4VygRGr7GHuYcMdvmThDyLmHMPz5W6l9EVVtUVfL0TcI5oEfvnIFEFUVazuHwxT6tz2VgzzqpcwtU00nxjVWf7p"
        token={makePayment}
        name="Buy Product"
        amount={product.price * 100}
        shippingAddress
        
      >
        <button className="btn-large danger">Buy Here {product.price}$</button>
      </StripeCheckout>
    </div>
  );
}
