import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';

const Location = () => {

    const [ location, setLocation ] = useState({})
    const [id, setId] = useState("")

    useEffect (() => {
        const random = Math.floor(Math.random() * 126) + 1 
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
             .then( res => setLocation(res.data) )

    },[])

    console.log(location)

    const searchId = () => {
        console.log(id)
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res=>setLocation(res.data))
    }

    return (
        <div className='card'>

            <img src="https://wallpaperaccess.com/full/5196310.png" alt="" />

            <h1>RICK AND MORTY WIKI</h1>

            <div className='button'>

            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button className='button' onClick={searchId}>Buscar</button> 
            </div>

            <br />

            <div className='info'>
            <h2><b>Name: </b>{location.name}</h2>
            <h3><b>Dimension: </b>{location.dimension}</h3>
            <h3><b>Type: </b>{location.type}</h3>
            <h3><b>Residents: </b>{location.residents?.length}</h3>
            </div>

            {location.residents?.map(resident => (
                <ResidentInfo resident={resident} key={resident}  />
            ))}

        </div>
    );
};

export default Location;