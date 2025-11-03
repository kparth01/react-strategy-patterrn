// strategies/PayPalStrategy.js
import PaymentStrategy from "./PaymentStrategy";

class UpiStrategy extends PaymentStrategy {
  pay(amount) {
    console.log(`Paying $${amount} using Upi.`);
    // Implement actual PayPal payment logic here
    return `Paid $${amount} with Upi.`;
  }
}

export default UpiStrategy;
