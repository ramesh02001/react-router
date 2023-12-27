import React,{useState} from 'react'

function Datascience() {
    const shopcard = [
        {   img: './img/ds1.jpeg ',
    
        product: 'Introduction of Datascience',
          
        },
        {   img: './img/ml.jpeg ',
    
        product: 'mechine learning',
          
        },
        {   img: './img/python.jpeg ',
    
        product: 'Datascience & python',
          
        },
        {   img: './img/ba.jpeg ',
    
        product: 'Data Analytics',
          
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
              <h4 >{item.product}</h4>
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

export default Datascience