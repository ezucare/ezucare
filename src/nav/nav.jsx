import "./nav.css";

function NavBar() {

  return  <div style={{topMargin: "60px"}}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <ul className="topnav">
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li className="right"><a href="#about">About</a></li>
            </ul>
    </div> 
}

export default NavBar;
