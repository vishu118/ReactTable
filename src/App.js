import { useState } from "react";
import Data from "./Components/Data.json";
import Head from "./Components/Head";
import Tablebody from "./Components/Tablebody";

function App() {
  const [displayInput, setdisplayInput] = useState(false);
  const [Contact,setContact] = useState(Data)
  const [NewContact ,setNewContact] = useState({
    id : "",
    first_name : "",
    last_name : "",
    email : "",
    phone: ""

  })


  const handleDisplay = () => {
    setdisplayInput((displayInput) => !displayInput);
  };

const handleAddContact = (e)=>{
  e.preventDefault();
 
  const fieldName = e.target.getAttribute("name");

  const fieldValue = e.target.value;
 
  const newInputData = {...NewContact};
  newInputData[fieldName] = fieldValue

  setNewContact(newInputData)
  

};



const handleAddData = (e)=>{
  e.preventDefault();

  const ContactToAdd = {
    id : NewContact.id,
    first_name : NewContact.first_name,
    last_name : NewContact.last_name,
    email : NewContact.email,
    phone : NewContact.phone
  }

  const New = [...Contact,ContactToAdd]
  setContact(New)
  setdisplayInput(false)
};


  return (
    <div className="container">
      <Head  displayInput = {displayInput} setDisplayInput={setdisplayInput}  handleAddContact = {handleAddContact}  handleAddData = {handleAddData} handleDisplay={handleDisplay}/>
      <Tablebody Contact={Contact}   />
    </div>
  );
}

export default App;
