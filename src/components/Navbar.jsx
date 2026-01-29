import '../styles/Navbar.css'


function Navbar() {
  return (
    <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>wibocode</a></div>
            <div className="menu">
                <ul>
                    <li><a href="#Beranda">Beranda</a></li>
                    <li><a href="#Program">Program</a></li>
                    <li><a href="#Pengajar">Pengajar</a></li>
                    <li><a href="#Mitra">Mitra</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="" className="tbl-biru">Sign Up</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar