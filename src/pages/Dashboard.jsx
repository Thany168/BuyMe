import React from "react";

function Dashboard() {
  function handleClick(){
    alert(123);
  }
return (
<>
  <button onClick={handleClick}>Click Me</button>
</>
)
}
export default Dashboard;
