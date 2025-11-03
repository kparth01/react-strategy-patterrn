import React, { createContext } from "react";
import appConfig from "../config/environment";

const ConfigContext = createContext(appConfig);

export const ConfigProvider = ({ children }) => (
  <ConfigContext.Provider value={appConfig}>{children}</ConfigContext.Provider>
);

export default ConfigContext;
