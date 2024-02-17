import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Inbody from "./Components/Inbody";
import Infoot from "./Components/Infoot";
import Inputfield from "./Components/Inputfield";
import Clientinfo from "./Components/Clientinfo";
import Userinfo from "./Components/Userinfo";

function App() {
  const [showinvoice, setShowInvoice] = useState(true);

  const [clientinfo, setClientInfo] = useState({
    clientname: "",
    clientaddress: "",
    clientemail: "",
    clientcountry: "",
  });

  const [userinfo, setUserInfo] = useState({
    username: "",
    useraddress: "",
    useremail: "",
    usercountry: "",
  });

  const [date, setDate] = useState("");
  const [invoiceid, setInvoiceId] = useState("");

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleInvoiceid = (e) => {
    setInvoiceId(e.target.value);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleClient = (event, type) => {
    setClientInfo({ ...clientinfo, [type]: event.target.value });
  };

  const handleUser = (event, type) => {
    setUserInfo({ ...userinfo, [type]: event.target.value });
  };

  const handleShowInvoice = () => {
    setShowInvoice(!showinvoice);
  };

  return showinvoice ? (
    <div>
      <div className="invoice-wrapper">
        <div className="invoice">
          <div className="invoice-container">
            <Header
              clientinfo={clientinfo}
              userinfo={userinfo}
              date={date}
              invoiceid={invoiceid}
            />
            <div className="overflow-view">
              <Inbody />
            </div>
            <Infoot handlePrint={handlePrint} showinvoice={handleShowInvoice} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Clientinfo clientinfo={clientinfo} handleClient={handleClient} />
      <Userinfo
        userinfo={userinfo}
        date={date}
        invoiceid={invoiceid}
        handleUser={handleUser}
        handleDate={handleDate}
        handleInvoiceid={handleInvoiceid}
      />
      <button className="preview-btn" onClick={handleShowInvoice}>
        Preview Invoice
      </button>
    </>
  );
}

export default App;
