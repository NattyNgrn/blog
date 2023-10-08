import {Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <div>
            <nav>
              <ul>
                  <li>
                    <Link to="/">Login</Link>
                  </li>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
              </ul>
            </nav>
      </div>
    )
}

export default NavBar;