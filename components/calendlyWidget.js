import React from "react";
import { InlineWidget } from "react-calendly";
 
const Widget = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/acert-calendar" />
    </div>
  );
};
 
export default Widget;