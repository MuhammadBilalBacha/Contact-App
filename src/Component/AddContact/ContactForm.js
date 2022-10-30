import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addContact } from "../../Redux/Actions/Action";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nmbr, setNmbr] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const myState = useSelector((state) => state);

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
      id: myState[myState.length - 1].id + 1,
      name: name,
      email: email,
      number: nmbr,
    };
    dispatch({ type: "ADD", payload: all });
    toast.success("Contact Added Successfully");
    Navigate("/");
    // console.log(all);
    // dispatch(addContact(all));
  };

  return (
    <div className="container py-5">
      <h1 className="text-center py-3">Add Your Contact</h1>
      <div className="row ">
        <div className="col-md-6 shadow py-5 mx-auto">
          <form action="" onSubmit={submitHandler}>
            <div className="form-group pb-4">
              <input
                value={name}
                type="text"
                placeholder="Enter your name"
                className="form-control"
                onChange={nameHandler}
              />
            </div>
            <div className="form-group pb-4">
              <input
                value={email}
                type="email"
                placeholder="Enter your email"
                className="form-control"
                onChange={emailHandler}
              />
            </div>
            <div className="form-group pb-4">
              <input
                value={nmbr}
                type="number"
                placeholder="Enter your number"
                className="form-control"
                onChange={nmbrHandler}
              />
            </div>
            <div className="form-group pb-4">
              <input
                type="submit"
                value="submit"
                className="form-control btn btn-success"
              />
            </div>
            <div className="form-group pb-4">
              <Link to="/">
                {" "}
                <input
                  type="button"
                  value="<-- Go back"
                  className="form-control btn btn-outline-danger"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
