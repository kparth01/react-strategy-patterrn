// strategies/CreditCardStrategy.js
import PaymentStrategy from "./PaymentStrategy";

class CreditCardStrategy extends PaymentStrategy {
  pay(amount) {
    console.log(`Paying $${amount} using Credit Card.`);
    // Implement actual credit card payment logic here
    return `Paid $${amount} with Credit Card.`;
  }
}

export default CreditCardStrategy;
