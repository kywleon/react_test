import  { useState, useEffect } from 'react'

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
    </>
  )
}

export default App
