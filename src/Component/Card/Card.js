import React, { useEffect, useState } from 'react';
import './Card.css'
import Imformation from '../Imformation/Imformation';
import Items from '../Items/Items';

const Card = () => {
    const[items, setItems] = useState([])
    const[imformation, setImformation] = useState(0)

    console.log(imformation);
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])



    const handleAddToList =(hello) =>{
         const newImformation =parseInt(hello);
         const total = imformation + newImformation;
         setImformation(total);

    }
    return (
        <div className='card-container'>
            <div className='right-side'>
                {
                   items.map(item => <Items

                      item ={item}
                      handleAddToList ={handleAddToList}
                   >
                   </Items>)
                }
            </div>
            <div className='left-side'>
                <Imformation
                imformation ={ imformation }
                ></Imformation>
            </div>
        </div>
    );
};

export default Card;