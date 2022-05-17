import axios from 'axios';
import React, { useEffect, useState } from 'react';

const LocationItem = ({resident} ) => {

    const [person, setPerson] = useState({})

    useEffect(() => {
        axios.get(resident)
             .then(res => setPerson(res.data))
    }, [resident])

    console.log(person)

    return (
        <div className='container'>
            <div className='img-resident'>
                <img src={person.image} alt="" />
                <div className='info-resident'>
                    <p>
                        <b>{person.name}</b>
                    </p>    
                    <p><b>Status: </b>{person.status}</p>
                    <p><b>Origin: </b>{person.origin?.name} </p>
                    <p><b>Episodes where appear: </b>{person.episode?.length}</p>
                </div>    
            </div>
        </div>

    );
};

export default LocationItem;