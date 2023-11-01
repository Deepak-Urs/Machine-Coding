import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)

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

  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage)
  }

  return (
    <div className="App"> 
      {
        products.length ? 
        (
        <div className='products'>
          {
            products.slice(page*5-5, page*5).map((prod) => {
              return (
              <span className='products__single'>
                <img src={prod.thumbnail} alt={'Product-Image'} />
                <span>{prod.title}</span>
              </span>
              )
            })
          }
          {
            products.length > 0 && (
              <div className='pagination'>
                <span> PREV </span>
                {[...Array(products.length/5)].map((_, i) => {
                  return <span key={i} onClick={() => selectPageHandler(i+1)}>{i+1}</span>
                })}
                <span> NEXT </span>
              </div>
            )
          }
        </div>
        ) 
        : (<div>No products to display</div>)
      }
    </div>
  );
}

export default App;
