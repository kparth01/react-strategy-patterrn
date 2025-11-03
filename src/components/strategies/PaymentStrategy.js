// strategies/PaymentStrategy.js
class PaymentStrategy {
  pay(amount) {
    throw new Error(
      "Payment method must be implemented by concrete strategies."
    );
  }
}

export default PaymentStrategy;
