import React from 'react'
import Slider from "react-slick";
import NextArrow from '../../common/carousal/NextArrow';
import PrevArrow from '../../common/carousal/PrevArrow';
import './deliveryCollections.css';
import DeliveryItem from './deliveryItem';

const DeliveryCollections = () => {
    const deliveryItems = [
        {
            id:1,
            name:'Home Style',
            cover:"https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
        },
        {
            id:2,
            name:'Pizza',
            cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        },
        {
            id:3,
            name:'Burger',
            cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        },
        {
            id:4,
            name:'Rolls',
            cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
        },
        {
            id:5,
            name:'Chaat',
            cover:"https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
        },
        {
            id:6,
            name:'Momos',
            cover:"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
        },
        {
            id:7,
            name:'Juice',
            cover:"https://b.zmtcdn.com/data/o2_assets/e6c74944b4d15017b51c07d5a97b34961648972347.png",
        },
        {
            id:8,
            name:'Fries',
            cover:"https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png",
        },
        {
            id:9,
            name:'Briyani',
            cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
        },
        {
            id:10,
            name:'Wraps',
            cover:"https://b.zmtcdn.com/data/dish_photos/e24/1b0a01fed2d16f99d98037160591ce24.jpg",
        },
        {
            id:11,
            name:'Samosa',
            cover:"https://b.zmtcdn.com/data/o2_assets/bc0cc8557a06fcd3aacdd7b241cf9db71632716547.png",
        },
        {
            id:12,
            name:'Noodles',
            cover:"https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
        },
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
    <div className='delivery-collections'>
        <div className='max-width'>
            <div className='collections-title'>Inspiration for your first order</div>
            <Slider {...settings}>
            {
                deliveryItems.map((item)=>{
                    return <DeliveryItem item={item} key={item.id}/>
                })
            }
            </Slider>
        </div>
    </div>
  )
}

export default DeliveryCollections