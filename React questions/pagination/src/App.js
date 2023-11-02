import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalpages] = useState(0)

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`)
    const data = await res.json()

    if(data && data.products) {
      setProducts(data.products);
      setTotalpages(data.total/10)
    }
    
    console.log(data);
  }

  console.log(('products seen', products));

  useEffect(() => {
    fetchProducts();
  }, [page])

  const selectPageHandler = (selectedPage) => {
    if(selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) setPage(selectedPage)
  }

  return (
    <div className="App"> 
      {
        products.length > 0 && 
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
      }
      {
            products.length > 0 && ( 
              <div className='pagination'>
                <span className={page > 1 ? "" : "pagination__disable"} onClick={() => selectPageHandler(page-1)}> PREV </span>
                {[...Array(totalPages)].map((_, i) => {
                  return <span className={page === i + 1 ? "pagination__selected" : " "} key={i} onClick={() => selectPageHandler(i+1)}>{i+1}</span>
                })}
                <span className={page < totalPages  ? "" : "pagination__disable"} onClick={() => selectPageHandler(page+1)}> NEXT </span>
              </div>
            )
          }
    </div>
  );
}

export default App;
