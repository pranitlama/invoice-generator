import React from "react";
import Inputfield from "./Inputfield";

export default function Transaction({
  handleTransaction,
  handleAllTransaction,
  alltransaction,
}) {
  return (
    <div className="input-wrapper">
      <div className="title">Transaction's Info</div>
      <div className="form">
        <Inputfield
          label={"Service"}
          type={"text"}
          name={"service"}
          onChange={(e) => handleTransaction(e, "service")}
        />
        <Inputfield
          label={"Description"}
          type={"text"}
          name={"description"}
          onChange={(e) => handleTransaction(e, "description")}
        />
        <Inputfield
          label={"Rate"}
          type={"number"}
          name={"rate"}
          onChange={(e) => handleTransaction(e, "rate")}
        />
        <Inputfield
          label={"Quantity"}
          type={"number"}
          name={"quantity"}
          onChange={(e) => handleTransaction(e, "quantity")}
        />
        <button className="preview-btn" onClick={handleAllTransaction}>
          Add Transaction
        </button>
        <div className="transaction-table">
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
              {alltransaction.map((item) => {
                return (
                  <tr>
                    <td>{item.service}</td>
                    <td>{item.description}</td>
                    <td>{item.rate}</td>
                    <td>{item.quantity}</td>
                    <td className="text-end">{item.rate * item.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
