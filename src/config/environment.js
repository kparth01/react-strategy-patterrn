// src/config/environment.js
const country =
  process.env.REACT_APP_COUNTRY || import.meta.env?.VITE_COUNTRY || "SG";

const configByCountry = {
  SG: {
    country: "Singapore",
    currency: "SGD",
    paymentMethod: "creditCard",
  },
  US: {
    country: "United States",
    currency: "USD",
    paymentMethod: "paypal",
  },
  IN: {
    country: "India",
    currency: "INR",
    paymentMethod: "upi",
  },
};

const appConfig = configByCountry[country] || configByCountry["SG"];

export default appConfig;
