import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../component/Button";
import { Link } from "react-router-dom";
import { deleteUser } from "./reducers/formSlice";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const UserList = () => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const handleDeleteUser = (id) => {
    dispatch(deleteUser({ id }));
  };
  const renderCard = () =>
    users.map((user) => (
      <div
        className="bg-gray-200 px-3 py-2  flex justify-between rounded-sm "
        key={user.id}
      >
        <div className="">
          <h3 className="font-bold text-lg text-gray-700"> {user.name} </h3>
          <span>{user.email}</span>
        </div>
        <div className=" pr-5 pt-3">
          <Link to={`edit-user/${user.id} `}>
            <button className="mr-2">
              <PencilIcon className="h-6 w-6" />
            </button>
          </Link>

          <button onClick={() => handleDeleteUser(user.id)}>
            <TrashIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    ));
  return (
    <div className="flex  align-center justify-center ">
      <div className="flex flex-col w-3/5">
        <div className="">
          <Link to="/add-user">
            <Button>Add user </Button>
          </Link>
        </div>
        <div className="grid gap-5  md:grid-cols-2  ">
          {users.length ? (
            renderCard()
          ) : (
            <div className="text-center col-span-2  text-gray-700 font-semibold">
              {" "}
              No users{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
