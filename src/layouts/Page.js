import React from 'react';
import {Outlet, Link} from 'react-router-dom'

class Page extends React.Component{
    render(){
        return (
            <>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                    <Link to="/gallery">Gallery</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
            </>
            
        )
    }
}
    

export default Page 