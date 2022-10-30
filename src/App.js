import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddContact from "./Component/AddContact/AddContact";
import Header from "./Component/Header.js/Header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ContactForm from "./Component/AddContact/ContactForm";
import EditContact from "./Component/AddContact/EditContact";
// import FormData from "./Component/AddContact/FormData";

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <Header />

      {/* <FormData /> */}
      <Routes>
        <Route path="/" element={<AddContact />} />
        <Route exact path="/add" element={<ContactForm />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </Fragment>
  );
}

export default App;
