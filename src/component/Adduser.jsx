import React from "react";
import TextField from "./TextField";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../features/users/reducers/formSlice";

const Adduser = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const handleAddUser = () => {
    dispatch(addUser({ id: uuidv4(), name: values.name, email: values.email }));

    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: " John Doe" }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: " johndoe@email.com" }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default Adduser;
