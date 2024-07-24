// Handles the Layout for the Navbar

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/userprofile">User Profile</Link>
          </li>
          <li>
            <Link to="/userfeed">User Feed</Link>
          </li>
          <li>
            <Link to="/usersavedfeed">User Saved Feed</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
                      <Link to="/map">Map</Link>
                    </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
