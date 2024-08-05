import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className=' px-5 py-2 bg-slate-900 text-white'>
            <nav className=' flex justify-between items-center'>
                <div>MyWeb</div>
                <div className=''>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `mx-5 ${isActive ? 'text-orange-500' : 'text-white'}`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `mx-5 ${isActive ? 'text-orange-500' : 'text-white'}`}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `mx-5 ${isActive ? 'text-orange-500' : 'text-white'}`}
                    >
                        Contact
                    </NavLink>
                </div>

            </nav>
        </header>
    )
}
export default Header;