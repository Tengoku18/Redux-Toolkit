import React from "react";
import { useSelector, useDispatch } from "react-redux";

import TextField from "../../component/TextField";
import Button from "../../component/Button";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "./reducers/formSlice";

const EditUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log("the current users from lists are ", users);
  const params = useParams();

  console.log("params are", params.id);

  const currentUser = users.filter((user) => user.id === params.id);
  const { name, email } = currentUser[0];

  console.log(currentUser);
  const [values, setValues] = useState({ name, email });
  const navigate = useNavigate();
  const handleEditUser = () => {
    dispatch(
      editUser({ id: params.id, name: values.name, email: values.email })
    );

    navigate("/");
  };

  return (
    <div>
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
        <Button onClick={handleEditUser}>Edit</Button>
      </div>
    </div>
  );
};

export default EditUser;
