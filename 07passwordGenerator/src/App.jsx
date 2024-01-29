import { useState,useCallback, useEffect, useRef } from 'react'

function App() {

  const [length,setLength]=useState(8);
  const [hasNumber,setHasNumber]=useState(false);
  const [hasCharacter,setHasCharacter]=useState(false);

  const [password,setPassword]=useState("");

  //useRef hook
  const passwordRef=useRef(null);

  const passwordGenerator=useCallback(
    () => {
      let pass="";
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if(hasNumber){
        str+="0123456789"
      }

      if(hasCharacter){
        str+="!@#$%^&*()_+"
      }

      for (let i = 1; i <= length; i++) {
        let char=Math.floor(Math.random()*str.length + 1);
        pass+=str.charAt(char);  
      }
      setPassword(pass);
    },
    [length,hasNumber,hasCharacter, setPassword],
  )

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])
  
    useEffect(()=>{
      passwordGenerator();
    },[length, hasNumber, hasCharacter, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 m-8 bg-gray-800 text-white'>
    <h1 className='text-xl text-center text-white my-4'>Password Generator</h1>
      <div className='flex overflow-hidden rounded-lg mb-4'>
        <input className='outline-none w-full py-1 px-3 text-black' type="text" value={password} placeholder='Password' readOnly ref={passwordRef}/>
        <button className='outline-none bg-blue-700 hover:bg-blue-500 text-white px-3 py-0.5' onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className='flex text-sm justify-center gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input className='cursor-pointer' type='range' min={6} max={20} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={hasNumber}
          onChange={()=>{setHasNumber(prev=>!prev)}}/>
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={hasCharacter}
          onChange={()=>{setHasCharacter(prev=>!prev)}}/>
          <label>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
