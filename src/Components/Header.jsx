import React from "react";
import reactlogo from "../assets/react.svg";
import "../App.css";

export default function Header({ clientinfo, userinfo, date, invoiceid }) {
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
            <span className="text-bold">Date:</span>
            {date}
          </p>
        </div>
        <div className="invoice-head-middle-right text-end">
          <p>
            <span className="text-bold">Invoice No: {invoiceid}</span>
          </p>
        </div>
      </div>
      <div className="hr"></div>
      <div className="invoice-head-bottom">
        <div className="invoice-head-bottom-left">
          <ul>
            <li className="text-bold">Invoiced to:</li>
            <li>{clientinfo.clientname}</li>
            <li>{clientinfo.clientaddress}</li>
            <li>{clientinfo.clientemail}</li>
            <li>{clientinfo.clientcountry}</li>
          </ul>
        </div>
        <div className="invoice-head-bottom-right">
          <ul className="text-end">
            <li className="text-bold">Invoiced from:</li>
            <li>{userinfo.username}</li>
            <li>{userinfo.useraddress}</li>
            <li>{userinfo.useremail}</li>
            <li>{userinfo.usercountry}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
