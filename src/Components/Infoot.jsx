import React from "react";

export default function Infoot({ handlePrint, showinvoice }) {
  return (
    <div className="invoice-foot text-center">
      <div className="invoice-btns">
        <button className="invoice-btn add-info" onClick={showinvoice}>
          Add information
        </button>
        <button className="invoice-btn print-btn" onClick={handlePrint}>
          Print
        </button>
      </div>
    </div>
  );
}
