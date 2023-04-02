import React, { useState } from "react";

const Head = () => {
  const [displayInput, setdisplayInput] = useState(false);

  const handleDisplay = () => {
    setdisplayInput((displayInput) => !displayInput);
  };

  return (
    <>
      <div className="head">
        <h1>User Data</h1>
        <div className="search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Enter here to Search"
          />
        </div>

        <div className="head-btn">
          <i className="fa-solid fa-plus" onClick={handleDisplay}></i>
          <button className="btn">Toggle</button>
        </div>
      </div>
      {displayInput && (
        <form action="" className="input">
          <input type="text" placeholder="Enter id" />
          <input type="text" placeholder="Enter First Name" />
          <input type="text" placeholder="Enter Last Name" />
          <input type="email" placeholder="Enter your Email" />
          <input type="text" placeholder="Enter Your Phone" />

          <button className="btn">Add</button>
        </form>
      )}
    </>
  );
};

export default Head;
