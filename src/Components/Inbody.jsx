import React from "react";

export default function Inbody({ alltransaction, tax }) {
  const totalAmount = alltransaction.reduce((total, object) => {
    const totalfortransaction = object.rate * object.quantity;
    return total + totalfortransaction;
  }, 0);

  const taxamt = ((tax ? tax : 0) / 100) * totalAmount;
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
          {alltransaction.map((item, index) => {
            return (
              <tr key={index}>
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
      <div className="invoice-body-bottom">
        <div className="invoice-body-info-item border-bottom">
          <div className="info-item-td text-end text-bold">Sub-total(₹):</div>
          <div className="info-item-td text-end">{totalAmount}</div>
        </div>
        <div className="invoice-body-info-item border-bottom">
          <div className="info-item-td text-end text-bold">Tax(%):</div>
          <div className="info-item-td text-end">
            {tax ? tax : 0}(₹ {taxamt})
          </div>
        </div>
        <div className="invoice-body-info-item">
          <div className="info-item-td text-end text-bold">Total(₹):</div>
          <div className="info-item-td text-end">{totalAmount + taxamt}</div>
        </div>
      </div>
    </div>
  );
}
