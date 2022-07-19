import React from 'react';
import Slider from "react-slick";
import NextArrow from '../../common/carousal/NextArrow';
import PrevArrow from '../../common/carousal/PrevArrow';
import './nightlifeCollections.css';
import NightOutItem from './nightOutItems';

const NightLifeCollections = () => {
    const nightlifeCollections = [
        {
          id:1,
          cover:'https://b.zmtcdn.com/data/collections/f29fa95355a78edb148d737d12bd9ef0_1646983582.jpg?output-format=webp',
          name:'Microbreweries',
          placeCount:'22 Places',
          place:<i className="fi fi-rr-caret-right"></i> 
        },
        {
          id:2,
          cover:'https://b.zmtcdn.com/data/collections/b05dc8713287671124d8408fb6198bb3_1631608443.jpg?output-format=webp',
          name:'Where\'s The Party?',
          placeCount:'33 Places',
          place:<i className="fi fi-rr-caret-right"></i> 
        }
      ]
      const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
      };
  return (
    <div>
        <div className='night-collection'>
            <div className="max-width">
                <div className="collections-title">Collections</div>
                <div className="collection-description">
                    <div className="collection-description-text">
                      Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
                    </div>
                    <div className="collection-description-link">All collections in Delhi NCR <i className="fi fi-rr-caret-right absolute-center"></i></div>
                </div>
                <Slider {...settings}> 
                    {nightlifeCollections.map((item)=>{
                        return <NightOutItem item={item} key={item.id}/>
                    })}
                </Slider>
            </div>

        </div>
      
    </div>
  )
}

export default NightLifeCollections
