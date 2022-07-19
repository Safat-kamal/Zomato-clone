import React from 'react';
import Slider from "react-slick";
import NextArrow from '../../common/carousal/NextArrow';
import PrevArrow from '../../common/carousal/PrevArrow';
import './topbrands.css';
const TopBrands = () => {
    const brands =[
        {
            id:1,
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png",
            name:"McDonald's",
            time:"33 min"
        },
        {
            id:2,
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png",
            name:"Domino's Pizza",
            time:"30 min"
        },
        {
            id:3,
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png",
            name:"Subway",
            time:"35 min"
        },
        {
            id:4,
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png",
            name:"Burger King",
            time:"30 min"
        },
        {
            id:5,
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/4bf3cd23b591c0292aba5fe476fadbef_1625160389.png",
            name:"Bikkgane Biryani",
            time:"33 min"
        },
        {
            id:6,
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png",
            name:"KFC",
            time:"37 min"
        },
        {
            id:7,
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/e12f7587d0a5f589af54c88352ff8bf3_1628324690.png",
            name:"Kwality Wall’s Frozen Dessert and Ice Cream Shop",
            time:"21 min"
        },
        {
            id:8,
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png",
            name:"Halidram",
            time:"35 min"
        },
        {
            id:9,
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png",
            name:"Bikanervala",
            time:"35 min"
        },
        {
            id:10,
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1cbe03ee1c6933e8fb2021cd835e889d_1624021602.png",
            name:"Rolls King",
            time:"28 min"
        }
    ]
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
      };
  return (
    <div className='topbrands-collections'>
        <div className='max-width'>
            <div className='collections-title'>Top brands for you</div>
            <Slider {...settings}>
                {
                    brands.map((brand)=>{
                        return (
                            <div key={brand.id}>
                                <div className='topbrands-cover'>
                                    <img src={brand.cover} alt={brand.id} className='topbrand-image'/>
                                </div>
                                <div className="topbrands-name">{brand.name}</div>
                                <div className="topbrand-time">{brand.time}</div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>

      
    </div>
  )
}

export default TopBrands
