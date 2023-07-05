import React, { useState } from 'react'
import './Hero.scss'
import sale_flower from '../../assets/sale_flower.png'



const Hero = () => {
    const data = [
        { label: 'House Plants', value: 33 },
        { label: 'Potter Plants', value: 12 },
        { label: 'Seeds', value: 65 },
        { label: 'Small Plants', value: 39 },
        { label: 'Big Plants', value: 23 },
        { label: 'Succulents', value: 17 },
        { label: 'Trerrariums', value: 19 },
        { label: 'Gardening Accessories', value: 13 },
        { label: 'Other', value: 18 }
      ];

      
      const [minPrice, setMinPrice] = useState(39);
      const [maxPrice, setMaxPrice] = useState(2000);
      
      const getBackground = (value) => {
        const minValue = Math.min(minPrice, maxPrice);
        const maxValue = Math.max(minPrice, maxPrice);
        
        if (value === minValue) {
          return '#46A358';
        } else if (value === maxValue) {
          return 'rgba(70, 163, 88, 0.20)';
        } else {
          return 'transparent';
        }

      };
      
  return (
    
    <div className='hero'>
        <div className='categoris'>
            <h4>Categoris</h4>
            <div className="categoris_names">
            
                    {/* Names  */}

                    <div className="main_categories">
                        {/* <h4>Categories</h4> */}
                        <div>
                            <span className='green'>House Plants</span>
                            <p className='green'>(33)</p>
                        </div>
                        <div>
                            <span>Potter Plants</span>
                            <p>(12)</p>
                        </div>
                        <div>
                            <span>Seeds</span>
                            <p>(65)</p>
                        </div>
                        <div>
                            <span>Small  Plants</span>
                            <p>(39)</p>
                        </div>
                        <div>
                            <span>Big  Plants</span>
                            <p>(23)</p>
                        </div>
                        <div>
                            <span>Succulents</span>
                            <p>(17)</p>
                        </div>
                        <div>
                            <span>Trerrariums</span>
                            <p>(19)</p>
                        </div>
                        <div>
                            <span>Gardening</span>
                            <p>(13)</p>
                        </div>
                        <div>
                            <span>Accessories</span>
                            <p>(18)</p>
                        </div>


                    </div>

                    {/* Price  */}
                        
                    <div className="price-range">
                            <h4 className='price_name'>Price Range </h4>
                            <div className="range-slider">
                                <input
                                type="range"
                                min="0"
                                max="2000"
                                value={minPrice}
                                onChange={(e) => setMinPrice(Number(e.target.value))}
                                style={{ background: getBackground(minPrice) }}
                                />
                                <input
                                type="range"
                                min="0"
                                max="2000"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                style={{ background: getBackground(maxPrice) }}
                                />
                            </div>
                            <div className="price-values">
                                  <p>Price:</p>          
                                <span className=''>{minPrice}-{maxPrice}</span>
                                
                            </div>
                                   {/* Filter */}

                                <button className='filter'>
                                    <span>Filter</span>
                                </button>

                        </div>

                        <div className='size'>
                            <h4 className='size_name'>Size</h4>
                            <p>Small</p>   <span>(119)</span>
                            <p>Medium</p>  <span>(86)</span>
                            <p>Large</p>   <span>(78)</span>

                            
                            
                            
                        </div>

             </div>
             <div className='sales'>
                <h4>Super Sale</h4>
                <p>Up to 75% off</p>
                <img src={sale_flower} alt='sale_flower' />
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default Hero