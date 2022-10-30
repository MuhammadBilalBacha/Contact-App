import React from "react";
import { Link } from "react-router-dom";
import FormData from "./FormData";

const AddContact = () => {
  return (
    <div className="container text-center py-5">
      <Link to="/add">
        {" "}
        <button className="btn btn-outline-dark">Add Contact</button>
      </Link>
      <FormData />
    </div>
  );
};

export default AddContact;
