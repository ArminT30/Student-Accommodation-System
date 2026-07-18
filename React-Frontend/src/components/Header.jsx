import logo from "../assets/logo.png";


function Header() {

  return (

    <header className="header sticky-top">


      <nav className="navbar">


        <a className="navbar-brand" href="/">

          <img 
            src={logo}
            alt="Student Accommodation"
          />

        </a>



        <div className="navbar-links">


          <a href="/">
            Home
          </a>


          <a href="/">
            Properties
          </a>


          <a href="/">
            Login
          </a>


        </div>



      </nav>


    </header>

  );

}


export default Header;