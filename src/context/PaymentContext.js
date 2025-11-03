// context/PaymentContext.js
class PaymentContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executePayment(amount) {
    if (!this.strategy) {
      throw new Error("No payment strategy set.");
    }
    return this.strategy.pay(amount);
  }
}

export default PaymentContext;
