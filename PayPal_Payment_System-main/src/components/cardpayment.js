import { useState } from "react";
import Paypal from "./Paypal";

export default function CardPayment() {
 
  const [check, setCheck] = useState(false);
  return (
    <div className="container">
      {check ? (
        <Paypal />
      ) : (
        <button
          onClick={() => {
            setCheck(true);
          }}
        >
          Conform
        </button>
      )}
    </div>
  );
}
