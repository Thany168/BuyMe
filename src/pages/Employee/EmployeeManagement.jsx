import { ButtonGroup, IconButton, MenuItem, Select, Stack, TextField } from "@mui/material";
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
  const [getId,setId]=useState();
  const [name,setName]=useState("");
  const [price,setPrice]=useState("");
  const [status,setStatus]=useState("active");
  

  const addNewData=()=>{
    if(name && price ){
      const newItem={
      id: data.length + 1,
      name: name,
      price: price,
      status: status,
      createdAt: new Date().toISOString().split('T')[0]
    }
    setData(pre=>[...pre,newItem]);
    console.log(data);
    }else{
      alert("Please fill all the fields");
    }
  }
  const deleteData=(id)=>{
    const newData=data.filter(item=>item.id!==id);
    setData(newData);
  }

  const ActiveData=(id)=>{
    const newData=data.map(item=>{
      if(item.id===id){
        if(item.status==="active"){
          return {...item,status:'inactive'};
        }else{
          return {...item,status:'active'};
        }
      }
      return item;
    });
    setData(newData);
  }


  return (
    <>
    <el-dialog>
  <dialog id="dialog" aria-labelledby="dialog-title" class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
    <el-dialog-backdrop class="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

    <div tabindex="0" class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
      <el-dialog-panel class="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
        <div class="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-red-400">
                <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 id="dialog-title" class="text-base font-semibold text-white">Delete Employee</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-400">Are you sure you want to delete this employee?</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button onClick={()=>deleteData(getId)} type="button" command="close" commandfor="dialog" class="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto">Delete</button>
          <button type="button" command="close" commandfor="dialog" class="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto">Cancel</button>
        </div>
      </el-dialog-panel>
    </div>
  </dialog>
</el-dialog>
    <el-dialog>
  <dialog id="dialog1" aria-labelledby="dialog-title" class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
    <el-dialog-backdrop class="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

    <div tabindex="0" class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
      <el-dialog-panel class="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-red-400">
                <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="mt-3  text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 id="dialog-title" class="text-base font-semibold text-black">Add Employee</h3>
              <div class="mt-5 flex gap-4">
                <TextField className="w-full " value={name} onChange={(e)=>setName(e.target.value)} color="white" label="Name" id="name" size="small" />
                <TextField className="w-full" value={price} onChange={(e)=>setPrice(e.target.value)}  label="Price" id="price" size="small" />
                   <select value={status} onChange={(e)=>setStatus(e.target.value)} id="countries" class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button  type="button" onClick={addNewData}  command="close" commandfor="dialog1" class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue/5 sm:ml-3 sm:w-auto">Save</button>
          <button type="button" command="close" commandfor="dialog1" class="mt-3 inline-flex w-full justify-center rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-red/5 hover:bg-red/20 sm:mt-0 sm:w-auto">Cancel</button>
        </div>
      </el-dialog-panel>
    </div>
  </dialog>
</el-dialog>
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
        
          <Button variant="contained" command="show-modal" commandfor="dialog1" >Add</Button>
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
                    <Button  color="primary" onClick={()=>ActiveData(item.id)}>Active</Button>
                    <Button command="show-modal" commandfor="dialog" color="error" onClick={()=>setId(item.id)}>Delete</Button>
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
