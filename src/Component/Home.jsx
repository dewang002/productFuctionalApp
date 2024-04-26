import React, { useContext, useEffect, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import Nav from "./Nav";
import { ProductContext } from "../Utils/Context";
import axios from "../Utils/Axios";

function Home() {
  
  const {product}=useContext(ProductContext)
  const {search}=useLocation();
  const [filtured,setfiltured]=useState(null)
  const catigory =decodeURIComponent(search.split("=")[1])
 
//  async function getproductcategory(){
//   const {data} = await axios.get(`/products/category/${catigory}`)
//   setfiltured(data)
//  } 
 
 useEffect(()=>{
  if(!filtured || catigory == "undefined")setfiltured(product)
  if(catigory != "undefined"){
    // getproductcategory()
    setfiltured(product.filter(elem=>elem.category==catigory))
    
  }},[catigory,product])
 
  return product ?(
    <div className="flex">
      <Nav />

      <div  className="w-[84%]  h-screen flex  flex-wrap  p-6 overflow-x-hidden overflow-y-auto ">
        {filtured && filtured.map((item,index)=>
        <Link key={index} to={`/detail/${item.id}`}>
          <div className="w-52 h-80  shadow-lg m-1">
            <div className="w-full h-[75%]  flex justify-center  ">
              <img
                className="w-[60%] object-contain hover:scale-110"
                src={item.image}
                alt=""
              />
            </div>
            <h1 className="h-[25%] w-full flex justify-center items-top text-sm font-semibold">
              {item.title}
            </h1>
          </div>
        </Link>)}
        <hr />
        
      </div>
    </div>
  ):<h1>loading</h1>;
}

export default Home;
