import React, { useState } from 'react'
import './All.css'
function All() {
    const shopcard =[ 
    {img:'./img/block.jpeg',
      product: 'blockchain',
      
    },
    {   img: './img/ba.jpeg',

    product: 'database',
      
    },
    {   img: './img/cyb.jpeg ',
    
    product: ' cybersecurity',
      
    },
    {img:'./img/mangodb.png',
      product: 'sql',
      
    },
    {img:'./img/mgdb.jpeg',
      product: 'mangodb',
       
    },
    {img:'./img/ethical.jpeg',
      product: 'CSS',
      
    },
    {img:'./img/mysql.png',
    product: 'Data analyticc using pandas',
     
  },
  {img:'./img/python.jpeg',
    product: 'python',
    
  },
   
   
   
    {img:'./img/ml.jpeg',
      product: 'mechinelearning',
       
    },
   
    ]

    const [isAdded, setIsAdded] =  useState(Array(shopcard.length).fill(false));
    const [count, setCount] = useState(0);
  
    const handleAddToCart = (index) => {
      const updatedIsAdded = [...isAdded];
      updatedIsAdded[index] = !updatedIsAdded[index];
      setIsAdded(updatedIsAdded);
      setCount((count) => count + 1);
      const data =  count + 1
      props.ondata(data);
    };
  
    const handleRemoveFromCart = (index) => {
      const updatedIsAdded = [...isAdded];
      updatedIsAdded[index] = false;
      setIsAdded(updatedIsAdded);
      setCount((count) => count - 1);
      const data =  count - 1
      props.ondata(data);
    };
  return (
    <div className='container'>
    {shopcard.map((item, index) => (
      <div key={index} className="card">
        <div>
          <img src={item.img} alt={item.product} className="sia" /> {/* Display the image */}
        </div>
        
        <div className='itames'>
          <h4 classNme="title" >{item.product}</h4>
        </div>
       
        
        <div className='itames'>
        {/* {isAdded[index] ? (
          <button onClick={() => handleRemoveFromCart(index)}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={() => handleAddToCart(index)}>
            Add to Cart
          </button>
        )} */}
        </div>
      </div>
    ))}
  </div>
  )
}

export default All