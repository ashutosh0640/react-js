import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Pagination from './components/Pagination';

function App() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const fetchProducts = async () => {
    const api1 = 'https://fakestoreapi.com/products';
    const api2 = 'https://dummyjson.com/products?limit=100';
    const res = await fetch(api2);
    const data = await res.json();


    //console.log(data.products);
    setProduct(data.products);

  }
  console.log(product);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className=' flex flex-col h-screen'>
        <h1 className=" fixed top-0 left-0 w-full h-16 bg-blue-500 z-10 text-center text-3xl font-bold ">
          Pagination example
        </h1>



        {/* Main body */}
        <div className=' flex-1 mt-16 mb-16 overflow-y-auto bg-gray-100'>

          <div className=''>
            {
              product.length > 0 && <div className=' grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1'>
                {
                  product.slice(page * pageSize - pageSize, page * pageSize).map((item, index) => (
                    <div key={index} className="bg-gray-200 p-4 m-4 rounded lg:h-3/5 md:h-3/5 border-2 border-red-500">{item.id}.
                      <img src={item.thumbnail} alt="" className=' md:h-2/3 border-2 border-red-500' />
                      <h2 className="text-xs font-bold">{item.brand}</h2>
                      <p className="text-sm">{item.title}</p>
                    </div>
                  ))}
              </div>
            }
          </div>

        </div>

        <div class="fixed flex justify-center items-center  bottom-0 left-0 w-full h-16 bg-blue-500 z-10">
          {
            product.length > 0 && <div className=' border-2 border-red-500 flex flex-row '>
              <span className="bg-gray-200 p-2 m-2 rounded
                hover:bg-gray-300 cursor-pointer flex justify-center items-center"><FaArrowLeft /></span>
              {
                Array(Math.ceil(product.length / pageSize)).fill(0).map((item, index) =>
                  <span key={index} className="bg-gray-200 p-2 m-2 rounded
                hover:bg-gray-300 cursor-pointer" onClick={() => setPage(index + 1)}>{index + 1}
                  </span>
                )
              }
              <span className="bg-gray-200 p-2 m-2 rounded
                hover:bg-gray-300 cursor-pointer flex justify-center items-center"><FaArrowRight /></span>
            </div>
          }
          
        </div>




      </div>
    </>
  )
}

export default App
