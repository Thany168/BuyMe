import React from "react";

function Dashboard() {
  function handleClick(){
    alert(123);
  }
return (
<>
  <button onClick={handleClick}>Me</button>
</>
)
}
export default Dashboard;
