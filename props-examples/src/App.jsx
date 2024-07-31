import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import ProductCard from './components/ProductCard.jsx'

export default function App() {

  const products = [
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/a/h/i/m-pop-white-combraided-original-imah32qu7qwvtj8y.jpeg?q=70',
      name: 'Product 1',
      price: 29.99,
      inStock: true,
      sizes: ['S', 'M', 'L', 'XL'],
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/j/d/q/l-half-devil-one-nb-nicky-boy-original-imagr55urjfzqpsg.jpeg?q=70',
      name: 'Product 2',
      price: 49.99,
      inStock: false,
      sizes: ['S', 'M', 'L'],
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/b/6/o/xxl-t599-tbbl-eyebogler-original-imagxc27gdfagzpg.jpeg?q=70',
      name: 'Product 3',
      price: 19.99,
      inStock: true,
      sizes: ['M', 'L'],
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/k/p/o/s-half-sleeve-shirt-1601-kajaru-original-imagxyfcsuzjabxn.jpeg?q=70',
      name: 'Product 4',
      price: 99.99,
      inStock: true,
      sizes: ['S', 'L', 'XL'],
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/m/y/m-st2-vebnor-original-imahfuabsgysawja.jpeg?q=70',
      name: 'Product 5',
      price: 39.99,
      inStock: false,
      sizes: ['M', 'XL'],
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/k7c88sw0/shirt/g/d/z/44-10944918-roadster-original-imafphhb5htzcsgj.jpeg?q=70',
      name: 'Product 6',
      price: 59.99,
      inStock: true,
      sizes: ['S', 'M'],
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/a/i/l-tpgrblhn-dp-d145-tripr-original-imah39g5ww4y9khv.jpeg?q=70',
      name: 'Product 7',
      price: 89.99,
      inStock: true,
      sizes: ['L', 'XL'],
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/a/i/l-tpgrblhn-dp-d145-tripr-original-imah39g5ww4y9khv.jpeg?q=70',
      name: 'Product 8',
      price: 22.99,
      inStock: false,
      sizes: ['S', 'M', 'L'],
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-shirt/a/y/e/m-sp-newveb-kuki-original-imahynz8zyjhz6ve.jpeg?q=70',
      name: 'Product 9',
      price: 75.99,
      inStock: false,
      sizes: ['S', 'M', 'L', 'XL'],
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/7/p/h/m-mlm-arn-black-151-narutotshirt-r-scott-fincher-original-imah2362pqydyyxj.jpeg?q=70',
      name: 'Product 10',
      price: 15.99,
      inStock: true,
      sizes: ['S'],
    },
  ];

  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      
      <h1>Product Lists</h1>

      <div className='inline-flex'>
        {products.map((product, index) => (
          <ProductCard 
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
          inStock={product.inStock}
          />
        ))}
      </div>
    </>
  )
}
