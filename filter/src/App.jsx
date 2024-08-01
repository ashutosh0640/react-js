import { useState } from 'react'
import './App.css'
import ProductDisplay from './components/ProductDisplay.jsx';

function App() {
  const [count, setCount] = useState(0);
  

  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: '$999.99',
      inStock: true,
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      name: 'Smartphone',
      price: '$499.99',
      inStock: true,
      sizes: ['S', 'M', 'L']
    },
    {
      id: 3,
      name: 'Headphones',
      price: '$199.99',
      inStock: false,
      sizes: ['M', 'L']
    },
    {
      id: 4,
      name: 'Smartwatch',
      price: '$149.99',
      inStock: true,
      sizes: ['S', 'M']
    },
    {
      id: 5,
      name: 'Tablet',
      price: '$299.99',
      inStock: true,
      sizes: ['M', 'L', 'XL']
    },
    {
      id: 6,
      name: 'Keyboard',
      price: '$89.99',
      inStock: true,
      sizes: ['S', 'M']
    },
    {
      id: 7,
      name: 'Mouse',
      price: '$29.99',
      inStock: true,
      sizes: ['S']
    },
    {
      id: 8,
      name: 'Monitor',
      price: '$199.99',
      inStock: false,
      sizes: ['M', 'L']
    },
    {
      id: 9,
      name: 'Printer',
      price: '$129.99',
      inStock: true,
      sizes: ['L']
    },
    {
      id: 10,
      name: 'Camera',
      price: '$799.99',
      inStock: true,
      sizes: ['M', 'L', 'XL']
    },
    {
      id: 11,
      name: 'Laptop',
      price: '$1999.99',
      inStock: true,
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 12,
      name: 'Smartphone',
      price: '$99.99',
      inStock: true,
      sizes: ['S', 'M', 'L']
    },
    {
      id: 13,
      name: 'Headphones',
      price: '$299.99',
      inStock: false,
      sizes: ['M', 'L']
    },
    {
      id: 14,
      name: 'Smartwatch',
      price: '$159.99',
      inStock: true,
      sizes: ['S', 'M']
    },
    {
      id: 15,
      name: 'Tablet',
      price: '$229.99',
      inStock: true,
      sizes: ['M', 'L', 'XL']
    },
    {
      id: 16,
      name: 'Keyboard',
      price: '$20.99',
      inStock: true,
      sizes: ['S', 'M']
    },
    {
      id: 17,
      name: 'Mouse',
      price: '$39.89',
      inStock: true,
      sizes: ['S']
    },
    {
      id: 18,
      name: 'Monitor',
      price: '$299.99',
      inStock: false,
      sizes: ['M', 'L']
    },
    {
      id: 19,
      name: 'Printer',
      price: '$229.99',
      inStock: true,
      sizes: ['L']
    },
    {
      id: 20,
      name: 'Camera',
      price: '$299.99',
      inStock: true,
      sizes: ['M', 'L', 'XL']
    }
  ];
  
  return (
    <>
      <h1>Product List</h1>
      <ProductDisplay products={products}/>
    </>
  )
}

export default App
