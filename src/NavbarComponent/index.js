import Logo from './Logo.png'

const NavbarComponent = () => {
    return (
        <nav className='bg-yellow-600'>
            <img src={Logo} className='h-16'/>
        </nav>
    )
}

export default NavbarComponent