import barberton from '../../assets/flowers/barberton.png'
import angelwing from '../../assets/flowers/angelwing.png'
import african from '../../assets/flowers/african.png'
import flower2 from '../../assets/flowers/flower2.png'
import blushing from '../../assets/flowers/blushing.png'
import aluminum from '../../assets/flowers/aluminum.png'
import birds from '../../assets/flowers/birds.png'
import chines from '../../assets/flowers/chines.png'
import broad from '../../assets/flowers/broad.png'



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

  const flowersData = [
    // { name: "Barberton Daisy", price: "$119.00", id: 1, img: barberton },
    { name: "Barberton Daisy", price: "$119.00", id: 2, img: angelwing },
    { name: "Barberton Daisy", price: "$119.00", id: 3, img: african },
    { name: "Barberton Daisy", price: "$119.00", id: 4, img: flower2 },
    { name: "Barberton Daisy", price: "$119.00", id: 5, img: blushing },
    { name: "Barberton Daisy", price: "$119.00", id: 6, img: aluminum },
    { name: "Barberton Daisy", price: "$119.00", id: 7, img: birds },
    { name: "Barberton Daisy", price: "$119.00", id: 8, img: broad },
    { name: "Barberton Daisy", price: "$119.00", id: 9, img: chines },
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

                  {/* Flowers  */}
          <div className='flowers'>
            <img src={barberton} alt="#" />
            <div className=''></div>
          </div>
       

    </div>
  )
}

export default Content


{/* <div className="flowers">
{flowersData.map((flower) => (
  <div className="flowers_card" key={flower.id}>
    <div className="flowers_image">
      <img src={flower.img} alt="#" />
    </div>
    <div className="flowers_texts">
      <p className="title">{flower.name}</p>
      <p className="price">{flower.price}</p>
    </div>
  </div>
))}
</div> */}