import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Github = () => {
  const data=useLoaderData();
  // const [data,setData]=useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/pritha004')
    //     .then(res=>res.json())
    //     .then(data=>{
    //       console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl'>Github Public Repos:{data.public_repos} 
    <img src={data.avatar_url} width={200}/>
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
        
        const res= await fetch('https://api.github.com/users/pritha004');
        return res.json();
}