import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchProducts()
  }, [page])

  const fetchProducts = async() => {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`);
    const data = await res.json();
    if(data && data.products) {
      console.log(data);
      setProducts(data.products)
      setTotalPages(data.total)
    }

  }

  const selectedPageHandler = (selectedPage) => {
    if(selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
      setPage(selectedPage)
    }
  }

  return (
    <div className="">
      {products.length > 0 && 
      <div className='products'>
        {
          products.map(prod =>(
          <span className='products__single' key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} />
            <span>{prod.title}</span>
          </span> ))
        }
        </div>}
        {products.length > 0 && <div className='pagination'>
            {page > 1 && <span onClick={() => selectedPageHandler(page-1)}>◀</span>}
            {[...Array(totalPages/10)].map((_, i) => 
              <span className={page === i+1 ? 'pagination_selected': ''} key={i} onClick={() => selectedPageHandler(i+1)}>{i+1}</span>
            )}
            {page < totalPages/10 && <span onClick={() => selectedPageHandler(page+1)}>▶</span>}
          </div>}
    </div>
  );
}

export default App;
