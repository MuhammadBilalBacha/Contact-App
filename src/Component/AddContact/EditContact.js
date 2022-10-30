import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditContact = () => {
  const { id } = useParams();
  const myState = useSelector((state) => state);
  const contacts = myState.find((data) => data.id === parseInt(id));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nmbr, setNmbr] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    setName(contacts.name);
    setEmail(contacts.email);
    setNmbr(contacts.number);
  }, [contacts]);
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const nmbrHandler = (e) => {
    setNmbr(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !email || !nmbr) {
      return toast.warning("Please fill in all fields");
    }
    // setName("");
    // setEmail("");
    // setNmbr("");
    const all = {
      id: myState.id,
      name: name,
      email: email,
      number: nmbr,
    };
    dispatch({ type: "UPDATE_CONTACT", payload: all });
    toast.success("Contact updated Successfully");
    Navigate("/");
    // console.log(all);
    // dispatch(addContact(all));
  };
  return (
    <div className="container py-5">
      {contacts ? (
        <>
          <h1 className="text-center py-3">Update Your Contact {id}</h1>
          <div className="row ">
            <div className="col-md-6 shadow py-5 mx-auto">
              <form action="" onSubmit={() => submitHandler(contacts.id)}>
                <div className="form-group pb-4">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="form-control"
                    value={name}
                    onChange={nameHandler}
                  />
                </div>
                <div className="form-group pb-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control"
                    value={email}
                    onChange={emailHandler}
                  />
                </div>
                <div className="form-group pb-4">
                  <input
                    type="number"
                    placeholder="Enter your number"
                    className="form-control"
                    value={nmbr}
                    onChange={nmbrHandler}
                  />
                </div>
                <div className="form-group d-flex pb-4">
                  <input
                    type="submit"
                    value="Update"
                    className="form-control btn w-50 btn-success"
                  />
                  <Link to="/">
                    <input
                      type="button"
                      value="Cancel"
                      className="form-control btn btn-danger w-20 ms-3"
                    />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-center mb-5">
            Contact of this Id {id} cannot be exist
          </h1>
          <Link to="/">
            <input
              type="button"
              value="<-- Go back"
              className="form-control btn btn-outline-danger"
            />
          </Link>
        </>
      )}
    </div>
  );
};

export default EditContact;
