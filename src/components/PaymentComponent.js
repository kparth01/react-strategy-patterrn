import React, { useContext } from "react";
import ConfigContext from "../context/ConfigContext";
import PaymentContext from "../context/PaymentContext";
import CreditCardStrategy from "../strategies/CreditCardStrategy";
import PayPalStrategy from "../strategies/PayPalStrategy";
import UpiStrategy from "../strategies/UpiStrategy";

function PaymentComponent() {
  const { paymentMethod, country, currency } = useContext(ConfigContext);

  const handlePayment = (amount) => {
    let strategy;
    switch (paymentMethod) {
      case "creditCard":
        strategy = new CreditCardStrategy();
        break;
      case "paypal":
        strategy = new PayPalStrategy();
        break;
      case "upi":
        strategy = new UpiStrategy();
        break;
      default:
        throw new Error("Unsupported payment method");
    }

    const context = new PaymentContext(strategy);
    const result = context.executePayment(amount);
    alert(`Paid ${amount} ${currency} via ${paymentMethod} (${country})`);
  };

  return (
    <div>
      <button onClick={() => handlePayment(100)}>Pay 100 {currency}</button>
    </div>
  );
}

export default PaymentComponent;
