import React from "react";
import "./FormData.css";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const FormData = () => {
  const myState = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted Successfully");
  };

  return (
    <div className="container py-5">
      <table className="table table-hover">
        <thead className="text-white bg-dark text-center">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="py-3">
          {myState.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.number}</td>
                <td>
                  <button
                    className="btn btn-danger ms-1"
                    onClick={() => deleteHandler(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FormData;
