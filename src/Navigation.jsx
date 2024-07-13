import "./App.css"
export default function Navigation(){
    return(

        <div className="container">
        <nav>
          <div className="logo">
            <img src="/image/brand_logo.png" alt="logo" />
          </div>
  
          <ul>
            <li><a href="#">MENU</a></li>
            <li><a href="#">LOCATION</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
          <button>Login</button>
        </nav>
      </div>
  
    )
}
