import { ButtonGroup, IconButton, Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

const testData = [
  {
    id: 1,
    name: "Item One",
    price: 120,
    status: "active",
    createdAt: "2025-01-01"
  },
  {
    id: 2,
    name: "Item Two",
    price: 250,
    status: "inactive",
    createdAt: "2025-01-02"
  },
  {
    id: 3,
    name: "Item Three",
    price: 99,
    status: "active",
    createdAt: "2025-01-03"
  },
  {
    id: 4,
    name: "Item Four",
    price: 180,
    status: "active",
    createdAt: "2025-01-04"
  },
  {
    id: 5,
    name: "Item Five",
    price: 300,
    status: "inactive",
    createdAt: "2025-01-05"
  },
  {
    id: 6,
    name: "Item Six",
    price: 75,
    status: "active",
    createdAt: "2025-01-06"
  },
  {
    id: 7,
    name: "Item Seven",
    price: 210,
    status: "active",
    createdAt: "2025-01-07"
  },
  {
    id: 8,
    name: "Item Eight",
    price: 160,
    status: "inactive",
    createdAt: "2025-01-08"
  },
  {
    id: 9,
    name: "Item Nine",
    price: 90,
    status: "active",
    createdAt: "2025-01-09"
  },
  {
    id: 10,
    name: "Item Ten",
    price: 450,
    status: "active",
    createdAt: "2025-01-10"
  }
];

function EmployeeManagement() {
  const [data, setData] = useState(testData);
  const [search,setSearch]=useState("");
  const filter=data.filter((item)=>search==="" || item.id.toString()==search);

  const addNewData=()=>{
    const newItem={
      id: data.length + 1,
      name: `Item ${data.length + 1}`,
      price: Math.floor(Math.random() * 500) + 50,
      status: Math.random() > 0.5 ? "active" : "inactive",
      createdAt: new Date().toISOString().split('T')[0]
    }
    setData(pre=>[...pre,newItem]);
    console.log(data);
  }


  return (
    <>
      <div className="">
        <div className="flex justify-between  w-full p-4">
        <div className="">
          <b className="text-3xl">Employee</b>
        </div>
        <div className="flex justify-between w-150">
          <Stack spacing={2} direction={"row"}>
            <TextField className="w-80" onChange={e=>setSearch(e.target.value)} label="Search..." id="Search" size="small" />
            <Button aria-label="search" variant="contained" color="primary"><SearchIcon color="white" /></Button>  
          </Stack> 
        
          <Button variant="contained" onClick={addNewData}>Add</Button>
        </div>
        </div>
        <div>
          <table className=" w-full p-4 table-auto text-center border-collapse border border-gray-300">
            <thead className="bg-gray-500 text-white rounded-lg">
              <tr>
                <th className="p-3">ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filter?.map((item,index)=>(
              <tr key={index}>
                <td className="p-3">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td className="justify-center align-center">
                  {item.status === "active" ? (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                      Active
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                      Inactive
                    </span>
                  )}
                </td>
                <td>
                  <ButtonGroup variant="contained">
                    <Button  color="primary" onClick={()=>alert("Edited")}>Edit</Button>
                    <Button  color="error" onClick={()=>alert("Deleted")}>Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
              ))}
    
            </tbody>
          </table>
          
        </div>
      </div>
    </>
  );
}

export default EmployeeManagement;
