import { useParams } from "react-router-dom"

const User = () => {
  const {userid}=useParams();
  return (
    <div className="bg-slate-300 text-3xl">User: {userid}</div>
  )
}

export default User