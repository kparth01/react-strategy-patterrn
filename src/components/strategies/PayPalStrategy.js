// strategies/PayPalStrategy.js
import PaymentStrategy from "./PaymentStrategy";

class PayPalStrategy extends PaymentStrategy {
  pay(amount) {
    console.log(`Paying $${amount} using PayPal.`);
    // Implement actual PayPal payment logic here
    return `Paid $${amount} with PayPal.`;
  }
}

export default PayPalStrategy;
