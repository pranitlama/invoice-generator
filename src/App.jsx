import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Inbody from "./Components/Inbody";
import Infoot from "./Components/Infoot";
import Clientinfo from "./Components/Clientinfo";
import Userinfo from "./Components/Userinfo";
import Transaction from "./Components/Transaction";

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

  const [transaction, setTransaction] = useState({
    service: "",
    description: "",
    rate: "",
    quantity: "",
  });

  const [alltransaction, setallTransaction] = useState([]);

  const [date, setDate] = useState("");
  const [invoiceid, setInvoiceId] = useState("");

  const [selectedFile, setSelectedFile] = useState("");
  const [imgurl, setImgUrl] = useState("");

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleInvoiceid = (e) => {
    setInvoiceId(e.target.value);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImgUrl(imageUrl);
    }
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

  const handleTransaction = (event, type) => {
    setTransaction({ ...transaction, [type]: event.target.value });
  };

  const handleAllTransaction = () => {
    const item = {
      service: transaction.service,
      description: transaction.description,
      rate: transaction.rate,
      quantity: transaction.quantity,
    };
    setTransaction({ service: "", description: "", rate: "", quantity: "" });

    setallTransaction([...alltransaction, item]);
    console.log(alltransaction);
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
              logo={imgurl}
              userinfo={userinfo}
              date={date}
              invoiceid={invoiceid}
            />
            <div className="overflow-view">
              <Inbody alltransaction={alltransaction} />
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
        selectedFile={selectedFile}
        handleUser={handleUser}
        handleDate={handleDate}
        handleInvoiceid={handleInvoiceid}
        handleFile={handleFile}
      />
      <Transaction
        handleTransaction={handleTransaction}
        handleAllTransaction={handleAllTransaction}
        alltransaction={alltransaction}
      />
      <button className="preview-btn" onClick={handleShowInvoice}>
        Preview Invoice
      </button>
    </>
  );
}

export default App;
