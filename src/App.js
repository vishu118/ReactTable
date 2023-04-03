import { useState } from "react";
import Data from "./Components/Data.json";
import Head from "./Components/Head";
import Tablebody from "./Components/Tablebody";


function App() {
  const [displayInput, setdisplayInput] = useState(false);
  const [Contact, setContact] = useState(Data);
  const [ Sorted , setSorted] = useState({Sorted : "id" , reversed : false})
  const [NewContact, setNewContact] = useState({
    id: "",
    full_name: "",
    email: "",
    phone: "",
  });

  const handleDisplay = () => {
    setdisplayInput((displayInput) => !displayInput);
  };

  const handleAddContact = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");

    const fieldValue = e.target.value;

    const newInputData = { ...NewContact };
    newInputData[fieldName] = fieldValue;

    setNewContact(newInputData);
  };

  const handleAddData = (e) => {
    e.preventDefault();

    const ContactToAdd = {
      id: NewContact.id,
      full_name: NewContact.first_name,
      last_name: NewContact.last_name,
      email: NewContact.email,
      phone: NewContact.phone,
    };

    const New = [...Contact, ContactToAdd];
    setContact(New);
    setdisplayInput(false);
  };

  const SortedById = () => {
    setSorted({Sorted : "id" , reversed : !Sorted.reversed})
    const ContactCopy = [...Contact]
    ContactCopy.sort((a,b) => {
       if(Sorted.reversed){
        return a.id - b.id 
       }
       return b.id - a.id
    })
    setContact(ContactCopy)
  };
  const SortedByFirstName = () => {
    setSorted({Sorted : "first_name" , reversed : !Sorted.reversed})
    const ContactCopy = [...Contact]
    ContactCopy.sort((a,b) => {
      if(Sorted.reversed){
        return b.first_name.localeCompare(a.first_name)
      }
        return a.first_name.localeCompare(b.first_name)
    })
    setContact(ContactCopy)
  };




  return (
    <div className="container">
      <Head
        displayInput={displayInput}
        setDisplayInput={setdisplayInput}
        handleAddContact={handleAddContact}
        handleAddData={handleAddData}
        handleDisplay={handleDisplay}
     
      />
      <Tablebody 
        Contact={Contact}
        Sorted = {Sorted}
        SortedById = {SortedById}
        SortedByFirstName = {SortedByFirstName}

       />
    </div>
  );
}

export default App;
