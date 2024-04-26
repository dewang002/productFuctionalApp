import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from '../Utils/Axios'
export const ProductContext = createContext()
function Context(props) {
const [product,setproduct]=useState(JSON.parse(localStorage.getItem("product"))||null)

// async function getproduct(){
//     const {data}=await axios.get(`/products`)
// setproduct(data)
// }
// useEffect(()=>{
//   getproduct()
// },[])

  return (
   <ProductContext.Provider value={{product,setproduct}}>
    {props.children}
   </ProductContext.Provider>
  )
}

export default Context
