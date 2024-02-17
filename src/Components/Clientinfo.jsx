import React from "react";
import Inputfield from "./Inputfield";

export default function Clientinfo({ clientinfo, handleClient }) {
  return (
    <div className="input-wrapper">
      <div className="title">Client's Info</div>
      <div className="form">
        <Inputfield
          label={"Client's name"}
          type={"text"}
          name={"clientname"}
          value={clientinfo.clientname}
          onChange={(e) => handleClient(e, "clientname")}
        />
        <Inputfield
          label={"Client's Address"}
          type={"text"}
          name={"clientaddress"}
          value={clientinfo.clientaddress}
          onChange={(e) => handleClient(e, "clientaddress")}
        />

        <Inputfield
          label={"Client's Email"}
          type={"text"}
          name={"clientemail"}
          value={clientinfo.clientemail}
          onChange={(e) => handleClient(e, "clientemail")}
        />

        <Inputfield
          label={"Client's Country"}
          type={"text"}
          name={"clientcountry"}
          value={clientinfo.clientcountry}
          onChange={(e) => handleClient(e, "clientcountry")}
        />
      </div>
    </div>
  );
}
