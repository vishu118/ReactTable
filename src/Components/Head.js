// import React, { useState } from "react";

const Head = ({handleAddContact,handleAddData,displayInput,handleDisplay}) => {
 


  return (
    <>
      <div className="head">
        <h1>User Data</h1>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
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
        <form action="" className="input" onSubmit = {handleAddData}>
          <input type="text" name = "id" placeholder="Enter id" onChange = {handleAddContact}  />
          <input type="text" name = "full_name" placeholder="Enter First Name" onChange = {handleAddContact} />
          <input type="email" name = "email" placeholder="Enter your Email" onChange = {handleAddContact} />
          <input type="text"  name = "phone" placeholder="Enter Your Phone" onChange = {handleAddContact} />

          <button className="btn" type="submit" >Add</button>
        </form>
      )}
    </>
  );
};

export default Head;
