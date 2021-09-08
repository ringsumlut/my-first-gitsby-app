import React from 'react';
import { Link } from 'gatsby';
import NavBar from '../components/nav-link';


const EventsPage = () => {

    return (
        <React.Fragment>
            <NavBar />
            <h1>Upcoming Events</h1>
            <h2> <Link to='/bossday'>10/16/21 Boss's Day</Link> </h2>
            <p>Aliqua reprehenderit Lorem fugiat amet culpa consectetur velit elit consequat cupidatat. Aute eu anim est ex cupidatat excepteur et mollit reprehenderit ullamco velit. Minim do et laboris dolor. Ad reprehenderit dolore cupidatat ullamco est eu mollit labore eiusmod laboris eiusmod dolor aute. Cillum tempor officia sit reprehenderit. Adipisicing nisi ullamco excepteur elit.</p>
            <button>
                <Link to='/bossday'>10/16/21 Boss's Day</Link>
            </button>

            <h2> <Link to='/hallow'>10/31/21 All Hallows' Eve</Link> </h2>
            <p>Do excepteur magna eiusmod aliqua reprehenderit incididunt. Eiusmod ad elit ex dolore sit dolore mollit ut cupidatat id magna. Non officia enim elit cupidatat est velit id est qui deserunt deserunt ipsum duis. Exercitation irure tempor commodo minim laboris tempor officia laboris esse. Elit proident velit anim anim et incididunt enim nisi cupidatat laboris fugiat nisi. Qui exercitation mollit ut dolor proident occaecat anim.</p>
            <button>
                <Link to='/hallow'>Read More</Link>
            </button>

            <h2> <Link to='/turkey'>11/25/21 Turkey Day</Link> </h2>
            <p>Occaecat ea anim eiusmod fugiat nulla enim ut irure cupidatat laborum consectetur. Incididunt sunt eu commodo incididunt aute commodo sit voluptate ex officia eiusmod nisi. Cupidatat laborum mollit labore quis in velit officia pariatur veniam laborum commodo.</p>
            <button>
                <Link to='/turkey'>Read More</Link>
            </button>
        </React.Fragment>
    );
};

export default EventsPage;