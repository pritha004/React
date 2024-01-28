import { useState } from "react";

function App() {
  const [color,setColor]=useState("white");
  return (
  <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button className="outline-none p-4 rounded-full text-black" style={{backgroundColor:"lavender"}} onClick={()=>setColor("lavender")}>Lavender</button>
        <button className="outline-none p-4 rounded-full text-white" style={{backgroundColor:"skyblue"}}
        onClick={()=>setColor("skyblue")}>Blue</button>
        <button className="outline-none p-4 rounded-full text-white" style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
        <button className="outline p-4 rounded-full text-black" style={{backgroundColor:"white"}}
        onClick={()=>setColor("white")}>White</button>
        <button className="outline-none p-4 rounded-full text-white" style={{backgroundColor:"black"}}
        onClick={()=>setColor("black")}>Black</button>
       </div>

    </div>
  </div>
  );
}

export default App;
