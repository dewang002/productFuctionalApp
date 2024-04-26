import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from '../Utils/Axios'
import { ProductContext } from '../Utils/Context'

function Detail() {
  const navigate = useNavigate()
  const {product,setproduct}=useContext(ProductContext)
  const {id}=useParams()

  const [products,setproducts]=useState(null)


  useEffect(()=>{
    if(!products){
      setproducts(product.filter(elem=> elem.id == id)[0])
    }
  })
  const handleDelete = (id)=>{
      const changedProduct = product.filter(elem=> elem.id !== id)
      setproduct(changedProduct)
      localStorage.setItem('product', JSON.stringify(changedProduct))
      navigate('/')
  }

  return products ?(
    <>
    <div className='container mx-auto h-full  flex items-center pl-[16%]'>
     <div className='w-[80%] h-96  flex items-center gap-16 '>
        <img className='h-72 ' src={products.image} alt="" />
        <div className='flex flex-col justify-center'>
        <h1 className='text-2xl font-semibold uppercase tracking-tighter'>{products.title}</h1>
        <h1 className='text-1xl mt-2 opacity-40'>{products.category}</h1>
        <h1 className='text-2xl mt-2 font-semibold uppercase tracking-tighter'>${products.price}</h1>
        <h1 className='text-sm font-lg mt-2 uppercase tracking-tighter w-[64%]'>{products.description}</h1>
        <div className='gap-8 flex mt-4'>
        <Link to={`/edit/${products.id}`}  className="font-semibold  text-sky-400 border border-sky-400 p-4 h-10 w-3/2 rounded flex items-center  ">Edit</Link>
        <button onClick={()=>{handleDelete(products.id)}} className="font-semibold  text-red-400 border border-red-400 p-4 h-10 w-3/2 rounded flex items-center  ">Delete</button>
</div>
         </div> 
     </div>
     
     
    </div>
   
    </>
  ):<h1>loading</h1>
}

export default Detail
