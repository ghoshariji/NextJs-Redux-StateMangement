"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "@/redux/slice/postSlice";
const page = () => {
    const dispatch = useDispatch();
  const data = useSelector((state) => state.post);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const handleAddData = () => {
    dispatch(addPost({id, title}));
  };
  const deleteData = (val1) =>{
    console.log(val1)
    dispatch(deletePost({val1}))
  }
  return (
    <div>
      <h1>Hello Home</h1>
      <input
        type="text"
        name="id"
        onChange={(e) => setId(e.target.value)}
        value={id}
      />
      <br/>
      <br/>

      <input
        type="text"
        name="name"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
 
      <button onClick={handleAddData}>Add Data</button>
      {data.map((val, ind) => {
        return (
          <>
            <p>{val.id}</p>
            <p>{val.title}</p>
            <button onClick={() => deleteData(val.id)}>Delete Data</button>
          </>
        );
      })}
    </div>
  );
};

export default page;
