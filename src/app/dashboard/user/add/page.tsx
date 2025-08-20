import React from "react";
import "./add.css";
const AddUserPage = () => {
  return (
    <div className="bg-[var(--bgSoft)] p-[20px] ml-[20px] mr-[20px]">
      <form>
        <div className="flex justify-between">
          <input
            className="input"
            type="text"
            placeholder="Username"
            required
          />

          <input className="input" type="email" placeholder="Email" required />
        </div>
        <div className="flex justify-between">
          <input
            className="input"
            type="number"
            placeholder=" Phone"
            required
          />
          <input
            className="input"
            type="number"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex justify-between">
          <input className="input" type="text" placeholder=" Color" required />
          <input className="input" type="text" placeholder=" Brand" required />
        </div>
        <div>
          <textarea
            className="textarea"
            name="description"
            placeholder="Description"
            id="description"
            required
          ></textarea>
        </div>
        <button
          className="bg-[#0b5549]  w-[100%] cursor-pointer   py-[16px] rounded-[5px] hover:bg-[#0a4b45] "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
