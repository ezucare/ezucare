import "./nav.css";

function NavBar() {

  return  <div style={{topMargin: "60px"}}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <ul class="topnav">
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li class="right"><a href="#about">About</a></li>
            </ul>
    </div> 
}

export default NavBar;
