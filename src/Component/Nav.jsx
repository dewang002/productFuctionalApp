import React, { useContext } from "react";
import { ProductContext } from "../Utils/Context";
import { Link } from "react-router-dom";
function Nav() {

  const {product}=useContext(ProductContext)
  let getcatigory=product.reduce((acc,cv)=>[...acc,cv.category],[])
  getcatigory=[...new Set(getcatigory)]
  
  return <div className="w-[16%] mt-[4%] h-screen flex  flex-col items-center p-1">
    {/* <button className="font-semibold mt-4 text-sky-400 border border-sky-400 p-2 h-10 w-3/2 rounded flex justify-center items-center"> Add New Product </button> */}
   {/* -----------------line---------- */}
   <div className="h-[1px] w-[90%] bg-zinc-200 mt-4"></div>
   <div className="w-[90%] h-screen ">
    <h1 className="text-xl font-semibold">Category Filter</h1>
    <div >
{getcatigory.map((item,index)=>
 <Link key={index} to={`/?catigory=${item}`} className="flex items-center h-10 w-[100%]  m-1 gap-1 capitalize font-semibold hover:opacity-40"><div className="h-2 w-2 rounded-full mt-1 bg-sky-300"></div>{item}</Link>
)}
         
    </div>
   </div>
  </div> 
  
  
}

export default Nav;
