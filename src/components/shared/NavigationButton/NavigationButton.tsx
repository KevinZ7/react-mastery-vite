import React, { ReactNode } from "react";
import "./NavigationButton.css";

const NavigationButton = ({ children }: { children: ReactNode }) => {
  return <button className="NavigationButton">{children}</button>;
};

export default NavigationButton;
