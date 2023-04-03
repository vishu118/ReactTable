import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Tablebody = ({ Contact, SortedById, SortedByFirstName, Sorted }) => {

  const renderArrow = ()=>{
    if(Sorted.reversed){
      return <FaArrowDown/>
    }
    return <FaArrowUp/>
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={SortedById}>
              Id
              {Sorted.Sorted === "id" ? renderArrow() : null}
            </th>
            <th onClick={SortedByFirstName}>
              First Name
              {Sorted.Sorted === "first_name" ? renderArrow() : null}
            </th>
            <th>Last Name </th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {Contact.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tablebody;
