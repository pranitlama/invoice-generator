import React from "react";
import Inputfield from "./Inputfield";

export default function Transaction({
  handleTransaction,
  handleAllTransaction,
  alltransaction,
  transaction,
  handleDelete,
}) {
  return (
    <div className="input-wrapper">
      <div className="title">Transaction's Info</div>
      <div className="form">
        <Inputfield
          label={"Service"}
          type={"text"}
          name={"service"}
          value={transaction.service}
          onChange={(e) => handleTransaction(e, "service")}
        />
        <Inputfield
          label={"Description"}
          type={"text"}
          name={"description"}
          value={transaction.description}
          onChange={(e) => handleTransaction(e, "description")}
        />
        <Inputfield
          label={"Rate"}
          type={"number"}
          name={"rate"}
          value={transaction.rate}
          onChange={(e) => handleTransaction(e, "rate")}
        />
        <Inputfield
          label={"Quantity"}
          type={"number"}
          name={"quantity"}
          value={transaction.quantity}
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
                <td className="text-bold">Action</td>
              </tr>
            </thead>
            <tbody>
              {alltransaction.map((item, index) => {
                const tid = item.id;
                return (
                  <tr key={index}>
                    <td>{item.service}</td>
                    <td>{item.description}</td>
                    <td>{item.rate}</td>
                    <td>{item.quantity}</td>
                    <td className="text-end">{item.rate * item.quantity}</td>
                    <td>
                      <button onClick={() => handleDelete(tid)}>Delete</button>
                    </td>
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
