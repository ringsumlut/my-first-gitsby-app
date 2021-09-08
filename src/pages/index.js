import React from 'react';
import { Link } from 'gatsby';
import NavBar from '../components/nav-link';


const HomePage = () => {

  return (
    <React.Fragment>
      <NavBar />

      <h1>Plain Page</h1>

      <p>Irure tempor officia excepteur ut sunt proident. Cupidatat esse tempor aliqua minim. Incididunt elit ea irure occaecat dolor magna officia aliqua anim reprehenderit deserunt.</p>


      <button><Link to='/login'>Join Us!</Link></button>
      <h4>Upcoming Events</h4>
      <Link to='/bossday'>10/16/21 Boss's Day</Link> <Link to='/hallow'>10/31/21 All Hallow's Eve</Link> <Link to='/turkey'>11/25/21 Turkey Day</Link>


    </React.Fragment>

  );
};

export default HomePage;