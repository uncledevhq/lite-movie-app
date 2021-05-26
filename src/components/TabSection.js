import React from 'react'

function TabSection() {
    return (
        <ul className="flex-box-lxt">
            <li>
                <a className="link-ya-tab active-tab" href="#!">
                    Trending   
                </a>    
            </li>           
            <li>
                <a className="link-ya-tab" href="#!">
                    New Releases
                </a>    
            </li>           
        </ul>
    )
}

export default TabSection
