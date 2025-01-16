
import React,{useState} from 'react';

import { data } from "./data";

function App() {
 const [search,setSearch]=useState('');
 console.log(search);
 <form onChange={(e)=>setSearch(e.target.value)}
 placeholder='Search Contacts'/>

  return (
    <div className="App">
      <table className="border-spacing-2 border border-slate-800 border-separate">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {data && data.filter((item)=>{
            return search.toLowerCase()=== ''
            ? item
            :item.first_name.toLowerCase().includes(search);
          }).map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}