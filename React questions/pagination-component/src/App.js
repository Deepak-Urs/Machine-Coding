import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async() => {
    const res = await fetch('https://dummyjson.com/products?limit=100');
    const data = await res.json();
    console.log(data);
    setProducts(data.products)
  }

  const selectedPageHandler = (selectedPage) => {
    setPage(selectedPage)
  }

  return (
    <div className="">
      {products.length > 0 && 
      <div className='products'>
        {
          products.slice(page*10-10, page*10).map(prod =>(
          <span className='products__single' key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} />
            <span>{prod.title}</span>
          </span> ))
        }
        </div>}
        {products.length > 0 && <div className='pagination'>
            <span>◀</span>
            {[...Array(products.length/10)].map((_, i) => 
              <span className={page === i+1 ? 'pagination_selected': ''} key={i} onClick={() => selectedPageHandler(i+1)}>{i+1}</span>
            )}
            <span>▶</span>
          </div>}
    </div>
  );
}

export default App;
