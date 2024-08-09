import { useState } from 'react'
import { createBrowserRouter, BrowserRouter as Router, Route, RouterProvider } from 'react-router-dom'
import './App.css'

import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
//import Github, { githubInfoLoader } from './components/Github/Github'




function App() {
  const [count, setCount] = useState(0)

  return (
    
      <RouterProvider router={router} />
    
  )
}

// const router = createBrowserRouter(
//   createBrowserRouter(
//     <Router path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='/about' element={<About />} />
//       <Route path='/contact' element={<Contact />} />
//     </Router>
//   )
// )


// Correct the router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);


export default App
