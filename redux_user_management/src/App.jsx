import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import UserAddForm from './components/userAddForm/UserAddForm.jsx'
import useNavbar from './hooks/useNavbar.js'
import NavbarOption from './components/navbar/navbar.js'


function App() {
  const { currentRoute, setCurrentRoute } = useNavbar();


  return (
    <>
      <Navbar
        NavbarMenuOptions={NavbarOption}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <div className="main">
        <UserAddForm/>
      </div>

    </>
  )
}

export default App
