import { useEffect, useState } from 'react'
import './App.css'
import { use } from 'react'
import axios from "axios"

function App() {

  const[user,setUser] = useState([])
  const[name,setName] = useState("");
  const[ email,setEmail] = useState("");
  const[editId,setEditId] = useState(null)

 
 async function fetchUser(){
    const response = await axios.get("https://user-management-system-ff4f6-default-rtdb.asia-southeast1.firebasedatabase.app/users.json")
    const fetchtheUser = []
    for (let key in response.data){
          fetchtheUser.push({id:key,...response.data[key]})  
    }
    setUser([...fetchtheUser])
  }

  async function addUser() {
    const newUser = {name,email};
    try {
      await axios.post("https://user-management-system-ff4f6-default-rtdb.asia-southeast1.firebasedatabase.app/users.json", newUser)
      fetchUser()
    } catch (error) {
      
    }
    setName('');
    setEmail('');
  }

  async function deleteUser(id) {
    try {
      await axios.delete(`https://user-management-system-ff4f6-default-rtdb.asia-southeast1.firebasedatabase.app/users/${id}.json`)
      fetchUser()
    } catch (error) {
      console.error('Error deleting user:', error);

    }
    
  }


  function editUser(id){
    setEditId(id)
    const users = user.find((users)=>users.id === id)
    setName(users.name)
    setEmail(users.email)
  }


  async function updateUser() {
    if (!name.trim() || !email.trim()) {
      alert('Name and Email cannot be empty.');
      return;
    }

    const updatedUser = { name, email };
    try {
      await axios.patch(
        `https://user-management-system-ff4f6-default-rtdb.asia-southeast1.firebasedatabase.app/users/${editId}.json`,
        updatedUser
      );
      fetchUser();
    } catch (error) {
      console.error('Error updating user:', error);
    }
    setName('');
    setEmail('');
    setEditId(null);
  }

  return (
    <>
    <h1>User Management System</h1>
        <div>
          <input type="text" value ={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input>
          <input type="text" value ={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}></input>
          <button onClick={editId? updateUser:addUser}>  {editId ? "Update User" : "Add User"} </button>
        </div>

        <button onClick={fetchUser}>fetchUser</button>
        <ul>
          {
            user.map((ele)=>(
                <li key = {ele.id}>
                  {ele.name} {ele.email}
                  <button onClick={()=>editUser(ele.id)}> Edit</button>
                  <button onClick={()=>deleteUser(ele.id)}> Delete</button>
                </li>
            ))
          }
        </ul>
    </>
  )

}

export default App
