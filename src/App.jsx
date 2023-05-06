import  { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import MUIDataTable from "mui-datatables";

import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [])

  //const columns = ["ID", "Name", "Email", "Phone", "Website"]

  const columns = ["Name", "Email", "Phone"]

  const options = {
    filterType: "dropdown",
    responsive: "standard",
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10],
    //this show the checkbox before the row 
    selectableRowsHideCheckboxes 	: true
  }

  const data = users.map((user) => [
    //user.id,
    user.name,
    user.email,
    user.phone,
    //user.website,
  ])
 

  return (
    <>
      <MUIDataTable
        title={"User Data"}
        data={data}
        columns={columns}
        options={options}
      />

      {/* <div>
          <h2>Hello world</h2>
        </div>
        <div>
        {users.map(user => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            <p>{user.company.name}, {user.company.catchPhrase}, {user.company.bs}</p>
          </div>
        ))}
      </div> */}
    
    </>
  )
}

export default App
