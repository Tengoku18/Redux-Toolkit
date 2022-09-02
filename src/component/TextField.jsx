import React from "react";

const TextField = ({ label, inputProps, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-base text-gray-800 font-semibold ">
        {label}{" "}
      </label>
      <input
        value={value}
        onChange={onChange}
        {...inputProps}
        className="bg-gray-200 px-3 py-2 border-2 outline-none"
      ></input>
    </div>
  );
};

export default TextField;
