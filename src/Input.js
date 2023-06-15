import React, { useState } from "react";

const Input = ({ inpData }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const submitHandler = () => {
    const tempData = {
      id: Math.ceil(Math.random() * 1000),
      task: name,
      desc: desc,
      status: "Pending",
    };

    inpData(tempData);
  };

  return (
    <section className="Input">
      <label>Name</label>
      <input
        type="text"
        placeholder="Task..."
        required
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label>Description</label>
      <input
        type="text"
        required
        placeholder="Today I will.."
        value={desc}
        onChange={(n) => {
          setDesc(n.target.value);
        }}
      />
      <button
        onClick={() => {
          submitHandler();
          setDesc("");
          setName("");
        }}
      >
        Add
      </button>
    </section>
  );
};

export default Input;
