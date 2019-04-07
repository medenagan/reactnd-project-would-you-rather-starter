import React from "react";
import logo from "../logo.svg";

export default function SignBox({head, subhead, children}) {

  return (
    <div className="box">
      <h1 className="aqua">{head}</h1>
      <h2 className="aqua">{subhead}</h2>
      <img src={logo} className="logo" alt="logo" title="Would Your Rather" />
      {children}
    </div>
  );
}
