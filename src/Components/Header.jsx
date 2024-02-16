import React from "react";
import reactlogo from "../assets/react.svg";
import "../App.css";

export default function Header() {
  return (
    <div className="invoice-head">
      <div className="invoice-head-top">
        <div className="invoice-head-top-left text-start">
          <img src={reactlogo} alt="" />
        </div>
        <div className="invoice-head-top-right text-end">
          <h3>Invoice</h3>
        </div>
      </div>
      <div className="hr"></div>
      <div className="invoice-head-middle">
        <div className="invoice-head-middle-left text-start">
          <p>
            <span className="text-bold">Date</span>:2/16/2024
          </p>
        </div>
        <div className="invoice-head-middle-right text-end">
          <p>
            <span className="text-bold">Invoice No: 10002</span>
          </p>
        </div>
      </div>
      <div className="hr"></div>
      <div className="invoice-head-bottom">
        <div className="invoice-head-bottom-left">
          <ul>
            <li className="text-bold">Invoiced to:</li>
            <li>Samik shakya</li>
            <li>swoyambhu,kathmandu</li>
            <li>gmail</li>
            <li>Nepal</li>
          </ul>
        </div>
        <div className="invoice-head-bottom-right">
          <ul className="text-end">
            <li className="text-bold">Invoiced from:</li>
            <li>Samik shakya</li>
            <li>swoyambhu,kathmandu</li>
            <li>gmail</li>
            <li>Nepal</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
