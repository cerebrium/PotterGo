import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Trolley(props) {

  const [items, setItems] = useState({})

  useEffect( () => {
    axios.get(`/api/userInfo?id=${props.user._id}`)
    .then(res => {
      console.log(res.data)
      setItems(res.data)}
      )
  }, [])


  var mappedItems;
  if (items) {
    mappedItems = (

      <p>House: {items.house}</p>
      <p>Wand: {items.wand}</p>
      <p>Pet: {items.pet}</p>
      <p>Diagon Alley: {items.wand}</p>
    )
  }
  return (
    <div className="App">
      <h1>Trolley Level 1</h1>

    </div>
  )
} 
