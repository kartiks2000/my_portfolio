import '../style/nav.css'

function Nav() {

    return (
        <div className='NavBar'>
            <span className='each_nav'><a href='/'>Home</a></span>
            <span className='each_nav'><a href='/'>About</a></span>
            <span className='each_nav'><a href='/'>Project</a></span>
            <span className='each_nav'><a href='/'>Contact</a></span>
        </div>
    );
}

export default Nav;