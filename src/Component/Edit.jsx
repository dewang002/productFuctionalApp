import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../Utils/Context'
function Edit() {
 const navigate = useNavigate()
 const {product,setproduct}=useContext(ProductContext)
 const {id}=useParams()
 const [products,setproducts]=useState({
    id:"",
    image:"",
    title:"",
    category:"",
    price:"",
    description:""
 })

 const changeHandler=(elem) =>{
    // console.log(elem.target.value,elem.target.name) 
    setproducts({...products, [elem.target.name]:elem.target.value})
}
  useEffect(()=>{
      setproducts(product.filter(elem=>elem.id==id)[0])
      
  },[id])
  const addProductHandler = (e) => {
    e.preventDefault();
    if(products.image.trim().length <5 ||products.title.trim().length <5 ||products.category.trim().length <5 ||products.price.trim().length <1 ||products.description.trim().length <5 ){
      alert("atleast_more_then_5_words")
      return;
      }

      const PI=product.findIndex((elem=>elem.id == id))
      const copydata = [...product]
      copydata[PI] = {...product[PI],...products}
      setproduct(copydata);
      localStorage.setItem("product",JSON.stringify(copydata))
      navigate('/')
  console.log(copydata)
  };

  return (
    <form
      onSubmit={addProductHandler}
      className="flex flex-col items-center  h-screen w-screen p-[5%]">
      <h1 className="w-1/2 text-4xl font-bold">Edit items</h1>
      <input
        type="number"
        className="rounded m-1 bg-zinc-100 w-1/2 outline-none text-2xl font-semibold"
        placeholder=" id"
        onChange={changeHandler}
        value={products && products.id}
      />
      <input
        type="text"
        className="rounded m-1 bg-zinc-100 w-1/2 outline-none text-2xl font-semibold"
        placeholder=" image"
        name="image"
        onChange={changeHandler}
        value={products && products.image}
      />
      <input
        type="text"
        className="rounded m-1 bg-zinc-100 w-1/2 outline-none text-2xl font-semibold"
        placeholder=" title"
        name="title"
        onChange={changeHandler}
        value={products &&products.title}
      />
      <div className="w-1/2 flex justify-between m-1">
        <input
          type="text"
          className="rounded  bg-zinc-100 w-[49%] outline-none text-2xl font-semibold"
          placeholder=" category"
          name="catigory"
          onChange={changeHandler}
          value={products&&products.category}
        />
        <input
          type="number"
          className="rounded  bg-zinc-100 w-[49%] outline-none text-2xl font-semibold"
          placeholder=" price"
          name="price"
          onChange={changeHandler}
          value={products&&products.price}
        />
      </div>
      <textarea
        className="rounded m-1 bg-zinc-100 w-1/2 outline-none text-2xl font-semibold h-[20%] "
        onChange={changeHandler}
        name="description"
        value={products&&products.description}
      ></textarea>
      <div className="flex w-1/2 gap-4">
        <button
          type="submit"
          className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-200  text-white  p-4 h-10 w-3/2 rounded flex items-center  "
        >
          Edit Product+
        </button>
        
      </div>
    </form>
  )
}

export default Edit
