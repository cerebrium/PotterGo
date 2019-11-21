import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Bookstore () {

    const [houses, setHouses] = useState([])

    useEffect(() => {
        axios.get('/api').then(response => {
            setHouses(response.data)
        }) 
    }, [])

    const hogwartsHouses = houses.map((ele, id) => <p key={id}>{ele.name}</p>)

    return (
        <>
            <h1>Book Store</h1>
            {hogwartsHouses}
        </>
    )
}

export default Bookstore