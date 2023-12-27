import React,{useState}from 'react'

function Database() {
    const shopcard=[
        {   img: './img/mysql.jpeg ',
    
        product: 'mysql',
          
        },
        {   img: './img/mangodb.png ',
    
        product: 'M DB',
          
        },
        {   img: './img/mgdb.jpeg ',
    
        product: 'NO mysql',
          
        },

    ];
    const [isAdded,setisAdded] = useState(Array(shopcard.length).fill(false));
    const [count,setCount]=useState(0);

    const handleAddToCart =(index)=>{
        const updatedisAdded=[...isAdded];
        updatedisAdded[index]=!updatedisAdded[index];
        setisAdded(updatedisAdded);
        setCount((count)=>count+1);
        const data = count + 1
        props.ondata(data);
    };
    const handleRemoveFromCart = (index) => {
        const updatedisAdded = [...isAdded];
        updatedisAdded[index] = false;
        setisAdded(updatedisAdded);
        setCount((count) => count - 1);
        const data =  count - 1
        props.ondata(data);
      };
  return (
    <div className='container'>
        {shopcard.map((item,index)=>(
            <div key={index} className='card'>
                <div>
                <img src={item.img} alt={item.product} className="sia" /> 
                </div>
                <div className='itames'>
                  <h4 >{item.product}</h4>
                 </div>
            </div>
        ))}
    </div>
  );
}

export default Database