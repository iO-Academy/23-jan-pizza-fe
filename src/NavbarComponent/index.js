import Logo from './Logo.png'

const NavbarComponent = () => {
    return (
        <nav className='bg-yellow-400'>
            <img src={Logo} className='h-16 p-1'/>
        </nav>
    )
}

export default NavbarComponent