// src/App.js
import React, { useContext, useState } from "react";
import ConfigContext from "./context/ConfigContext";
import PaymentContext from "./context/PaymentContext";
import CreditCardStrategy from "./strategies/CreditCardStrategy";
import PayPalStrategy from "./strategies/PayPalStrategy";
import UpiStrategy from "./strategies/UpiStrategy";

import Header from "./components/Header";

function App() {
  const { paymentMethod, country, currency } = useContext(ConfigContext);
  const [paymentResult, setPaymentResult] = useState("");

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
        throw new Error(`Unsupported payment method: ${paymentMethod}`);
    }

    const context = new PaymentContext(strategy);
    const result = context.executePayment(amount);
    setPaymentResult(result);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <Header />

      <h2>Country Configuration</h2>
      <p>
        <strong>Country:</strong> {country}
      </p>
      <p>
        <strong>Currency:</strong> {currency}
      </p>
      <p>
        <strong>Payment Method:</strong> {paymentMethod}
      </p>

      <button onClick={() => handlePayment(100)}>Pay 100 {currency}</button>

      {paymentResult && (
        <p style={{ marginTop: "1rem", color: "green" }}>
          Result: {paymentResult}
        </p>
      )}
    </div>
  );
}

export default App;
