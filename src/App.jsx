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

  const [id, setId] = useState(1);
  const [transaction, setTransaction] = useState({
    id: id,
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
  const [tax, setTax] = useState("");

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
    if (
      !transaction.service ||
      !transaction.description ||
      !transaction.quantity ||
      !transaction.rate
    ) {
      alert("empty fields");
    } else {
      setId((prev) => prev + 1);
      const item = {
        id: id,
        service: transaction.service,
        description: transaction.description,
        rate: transaction.rate,
        quantity: transaction.quantity,
      };
      setTransaction({ service: "", description: "", rate: "", quantity: "" });

      setallTransaction([...alltransaction, item]);
      console.log(alltransaction);
    }
  };

  const handleShowInvoice = () => {
    setShowInvoice(!showinvoice);
  };
  const handleTax = (e) => {
    setTax(e.target.value);
  };

  const handleDelete = (id) => {
    const temp = alltransaction.filter((item) => item.id !== id);
    setallTransaction(temp);
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
              <Inbody alltransaction={alltransaction} tax={tax} />
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
        handleTax={handleTax}
        tax={tax}
      />

      <Transaction
        handleTransaction={handleTransaction}
        handleAllTransaction={handleAllTransaction}
        alltransaction={alltransaction}
        transaction={transaction}
        handleDelete={handleDelete}
      />

      <button className="preview-btn" onClick={handleShowInvoice}>
        Preview Invoice
      </button>
    </>
  );
}

export default App;
