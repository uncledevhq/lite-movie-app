import React from 'react'
import { Link } from 'react-router-dom';

function TabSection({activeTab}) {
    return (
        <ul className="flex-box-lxt">
            <li>
                <Link to="/" className={`link-ya-tab ${(activeTab === 'home') ? "active-tab" : ""}`}>
                    Home
                </Link>    
            </li> 
            <li>
                <Link to="/trending" className={`link-ya-tab ${(activeTab === 'trending') ? "active-tab" : ""}`}>
                    Trending   
                </Link>    
            </li>           
                       
        </ul>
    )
}

export default TabSection;
