import React from "react";
import "./brand.css";
import { google, slack, altassian, dropbox, shopify } from "./brandImort";

const Brand = () => {
  return <div className="gpt3__brand">
    <div>
      <img src={google}></img>
    </div>
    <div>
      <img src={slack}></img>
    </div>
    <div>
      <img src={altassian}></img>
    </div>
    <div>
      <img src={dropbox}></img>
    </div>
    <div>
      <img src={shopify}></img>
    </div>
  </div>;
};

export default Brand;
