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
                    <p className='text-center'>
                        <b>{person.name}</b>
                    </p>    
                    <p><b>Status: </b>{person.status}</p>
                    <p className='description'><b>Origin: </b>{person.origin?.name} </p>
                    <p className='description'><b>Episodes where appear: </b>{person.episode?.length}</p>
                </div>    
            </div>
        </div>

    );
};

export default LocationItem;