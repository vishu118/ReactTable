import React from "react";

const Tablebody = ({ Contact,SortedById,SortedByFirstName }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick = {SortedById}>Id </th>
            <th onClick = {SortedByFirstName}>First Name</th>
            <th>Last Name</th>
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
