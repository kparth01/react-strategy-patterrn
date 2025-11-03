import React, { useContext } from "react";
import ConfigContext from "./context/ConfigContext";

function Header() {
  const { country, currency } = useContext(ConfigContext);

  return (
    <header>
      <h1>Welcome to {country} Store</h1>
      <p>Currency: {currency}</p>
    </header>
  );
}

export default Header;
