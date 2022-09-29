import React from 'react';
import './Items.css'

const Items = (props) => {

    const{ picture,name, content, age, time}=props.item;
    const { handleAddToList } =props;
      return (
        <div className='card'>
            <div>
                 <img src={picture} alt="" srcset="" />
                <p className='name'>{name}</p>
                <p>{content}</p>
                <p>Age: {age}</p>
                <p>Time Required:{time}</p>
                <button onClick={() => handleAddToList(time)} className="btn">
                    <p>Add To list </p>
                </button>
            </div>
        </div>
    );
};

export default Items;