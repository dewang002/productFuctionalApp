import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { ProductContext } from "../Utils/Context";
import {useNavigate}from 'react-router-dom'
import { toast } from "react-toastify";

function Create() {
  const navigate=useNavigate()
  const {product, setproduct} = useContext(ProductContext);
  const [id, setid] = useState("");
  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const addProductHandler = (e) => {
    e.preventDefault();
    if(image.trim().length <5 ||title.trim().length <5 ||category.trim().length <5 ||price.trim().length <1 ||description.trim().length <5 ){
      alert("atleast_more_then_5_words")
      return;
      }
    const products = { id, image, title, category, price, description };
    setproduct([...product, products]);
    localStorage.setItem("product",JSON.stringify([...product, products]))
    toast.success("Product added")
    navigate('/')
  
  };

  return (
    <form
      onSubmit={addProductHandler}
      className="flex flex-col items-center  h-screen w-screen p-[5%]"
      
    >
      <h1 className="w-1/2">Add items</h1>
      <input
        type="number"
        className="rounded m-1 bg-zinc-100 w-1/2 outline-none text-2xl font-semibold"
        placeholder=" id"
        onChange={(elem) => setid(elem.target.value)}
        value={id}
      />
      <input
        type="text"
        className="rounded m-1 bg-zinc-100 w-1/2 outline-none text-2xl font-semibold"
        placeholder=" image"
        onChange={(elem) => setimage(elem.target.value)}
        value={image}
      />
      <input
        type="text"
        className="rounded m-1 bg-zinc-100 w-1/2 outline-none text-2xl font-semibold"
        placeholder=" title"
        onChange={(elem) => settitle(elem.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between m-1">
        <input
          type="text"
          className="rounded  bg-zinc-100 w-[49%] outline-none text-2xl font-semibold"
          placeholder=" catigory"
          onChange={(elem) => setcategory(elem.target.value)}
          value={category}
        />
        <input
          type="number"
          className="rounded  bg-zinc-100 w-[49%] outline-none text-2xl font-semibold"
          placeholder=" price"
          onChange={(elem) => setprice(elem.target.value)}
          value={price}
        />
      </div>
      <textarea
        className="rounded m-1 bg-zinc-100 w-1/2 outline-none text-2xl font-semibold h-[20%] "
        onChange={(elem) => setdescription(elem.target.value)}
        value={description}
      ></textarea>
      <div className="flex w-1/2 gap-4">
        <button
          type="submit"
          className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-200  text-white  p-4 h-10 w-3/2 rounded flex items-center  "
        >
          Add+
        </button>
        <button className="font-semibold  text-red-400 border border-red-400 p-4 h-10 w-3/2 rounded flex items-center  ">
          Delete
        </button>
      </div>
    </form>
  );
}

export default Create;
