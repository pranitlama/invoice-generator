import React from "react";

export default function Inbody() {
  return (
    <div className="invoice-body">
      <table>
        <thead>
          <tr>
            <td className="text-bold">Services</td>
            <td className="text-bold">Description</td>
            <td className="text-bold">rate</td>
            <td className="text-bold">quantity</td>
            <td className="text-bold">total</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>coding</td>
            <td>fixing bug</td>
            <td>50</td>
            <td>2</td>
            <td className="text-end">100</td>
          </tr>
          <tr>
            <td>coding</td>
            <td>fixing bug</td>
            <td>50</td>
            <td>2</td>
            <td className="text-end">100</td>
          </tr>
          <tr>
            <td>coding</td>
            <td>fixing bug</td>
            <td>50</td>
            <td>2</td>
            <td className="text-end">100</td>
          </tr>
          <tr>
            <td>coding</td>
            <td>fixing bug</td>
            <td>50</td>
            <td>2</td>
            <td className="text-end">100</td>
          </tr>
        </tbody>
      </table>
      <div className="invoice-body-bottom">
        <div className="invoice-body-info-item border-bottom">
          <div className="info-item-td text-end text-bold">Sub-total(₹):</div>
          <div className="info-item-td text-end">10000</div>
        </div>
        <div className="invoice-body-info-item border-bottom">
          <div className="info-item-td text-end text-bold">Tax(%):</div>
          <div className="info-item-td text-end">100</div>
        </div>
        <div className="invoice-body-info-item">
          <div className="info-item-td text-end text-bold">Total(₹):</div>
          <div className="info-item-td text-end">10000</div>
        </div>
      </div>
    </div>
  );
}
