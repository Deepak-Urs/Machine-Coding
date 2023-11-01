import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products/')
    const data = await res.json()

    if(data && data.products) {
      setProducts(data.products)
    }
    
    console.log(data);
  }

  console.log(('products seen', products));

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div className="App"> 
      {
        products.length ? 
        (
        <div className='products'>
          {
            products.map((prod) => {
              return (
              <span className='products__single'>
                <img src={prod.thumbnail} alt={'Product-Image'} />
                <span>{prod.title}</span>
              </span>
              )
            })
          }
        </div>
        ) 
        : (<div>No products to display</div>)
      }
    </div>
  );
}

export default App;
