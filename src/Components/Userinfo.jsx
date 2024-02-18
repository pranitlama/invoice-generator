import React from "react";
import Inputfield from "./Inputfield";

export default function Userinfo({
  userinfo,
  date,
  invoiceid,
  handleUser,
  handleDate,
  handleInvoiceid,
  handleFile,
  tax,
  handleTax,
}) {
  return (
    <div className="input-wrapper">
      <div className="title">User's Info</div>
      <div className="form">
        <Inputfield
          label={"User's Name"}
          type={"text"}
          name={"username"}
          value={userinfo.username}
          onChange={(e) => handleUser(e, "username")}
        />

        <Inputfield
          label={"User's Address"}
          type={"text"}
          name={"useraddress"}
          value={userinfo.useraddress}
          onChange={(e) => handleUser(e, "useraddress")}
        />

        <Inputfield
          label={"User's Email"}
          type={"text"}
          name={"useremail"}
          value={userinfo.useremail}
          onChange={(e) => handleUser(e, "useremail")}
        />

        <Inputfield
          label={"User's Country"}
          type={"text"}
          name={"usercountry"}
          value={userinfo.usercountry}
          onChange={(e) => handleUser(e, "usercountry")}
        />

        <Inputfield
          label={"Date"}
          type={"date"}
          name={"date"}
          value={date}
          onChange={(e) => handleDate(e)}
        />

        <Inputfield
          label={"Invoice no"}
          type={"number"}
          name={"invoiceid"}
          value={invoiceid}
          onChange={(e) => handleInvoiceid(e)}
        />

        <Inputfield
          label={"Company's Logo"}
          type={"file"}
          name={"logo"}
          onChange={(e) => handleFile(e)}
        />

        <Inputfield
          label={"Tax"}
          type={"number"}
          name={"tax"}
          value={tax}
          onChange={(e) => handleTax(e)}
        />
      </div>
    </div>
  );
}
