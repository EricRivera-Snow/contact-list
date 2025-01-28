import React, { useState, useEffect } from "react";
import ContactRow from "../ContactRow/ContactRow";

import axios from "axios";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

function ContactList({ setFeaturedUser }) {
  const [contacts, setContacts] = useState(dummyContacts);
  useEffect(() => {
    axios("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
      .then((data) => {
        console.log(data.data);
        setContacts(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("contacts: ", contacts);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => {
          return (
            <ContactRow
              key={contact.id}
              contact={contact}
              setFeaturedUser={setFeaturedUser}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default ContactList;
