import React, { useState } from 'react'
import './Content.scss'



const Content = () => {

  const [activeTitle, setActiveTitle] = useState(1);

  const navBar = [
    { id: 1, title: "All Palnts", path: "/all_plants" },
    { id: 2, title: "New Arrivals", path: "/new_arrivals" },
    { id: 3, title: "Sale", path: "/sale" },
    {  },
  ];


  return (
    <div className='content' >
        <div className='names'>
          <ul>
                {navBar.map((item) => (
              <h4
               className={`${activeTitle === item.id ? "activeTitle" : ""}`}
                onClick={() => setActiveTitle(item.id)}
              >
                 {item.title}
              </h4>
                 ))}
            </ul>
        </div>

        <div className='flowers'>
          
        </div>
    </div>
  )
}

export default Content