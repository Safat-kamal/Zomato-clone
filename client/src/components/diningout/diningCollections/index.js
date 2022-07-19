import React from 'react';
import Slider from "react-slick";
import NextArrow from '../../common/carousal/NextArrow';
import PrevArrow from '../../common/carousal/PrevArrow';
import './diningOutCollections.css';
import DiningOutItem from './diningOutItems';

const DiningOutCollections = () => {
    const diningCollections = [
        {
          id:1,
          cover:'https://b.zmtcdn.com/data/collections/e2ceb701e81a8113eab9627069f6f6bf_1649144881.jpg',
          name:'Live Cricket Screening',
          placeCount:'59 Places',
          place:<i className="fi fi-rr-caret-right"></i> 
        },
        {
          id:2,
          cover:'https://b.zmtcdn.com/data/collections/031c2dd47d839ff2bf98dbb66147ab4f_1648708613.jpg',
          name:'Newly Opened',
          placeCount:'12 Places',
          place:<i className="fi fi-rr-caret-right"></i> 
        },
        {
          id:3,
          cover:'https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040101.png',
          name: 'Trending This Week',
          placeCount:'30 Places',
          place:<i className="fi fi-rr-caret-right"></i> 
        },
        {
          id:4,
          cover:'https://b.zmtcdn.com/data/collections/dc55234ebcab4867fa2eb65730c4a695_1646987030.jpg',
          name:'Best of Delhi NCR',
          placeCount:'150 Places',
          place:<i className="fi fi-rr-caret-right"></i> 
        },
        {
          id:5,
          cover:'https://b.zmtcdn.com/data/collections/821a4a7a6a0f8c265f5bf804cf18dfa3_1631714127.jpg',
          name:'Great Cafes',
          placeCount:'29 Places',
          place:<i className="fi fi-rr-caret-right"></i> 
        },
        {
          id:6,
          cover:'https://b.zmtcdn.com/data/collections/f29fa95355a78edb148d737d12bd9ef0_1646983582.jpg',
          name:'Microbreweries',
          placeCount:'22 Places',
          place:<i className="fi fi-rr-caret-right"></i> 
        },
        {
          id:7,
          cover:'https://b.zmtcdn.com/data/collections/460a438bf1ccf7a0e032928f6fef0d75_1646984077.jpg',
          name:'High On Sugar',
          placeCount:'30 Places',
          place:<i className="fi fi-rr-caret-right"></i> 
        },
        {
          id:8,
          cover:'https://b.zmtcdn.com/data/collections/2683237a53944cfd9801c2fabd5cdf32_1582082375.jpg',
          name:'Legendary Outlets',
          placeCount:'27 Places',
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
        <div className='dining-collection'>
            <div className="max-width">
                <div className="collections-title">Collections</div>
                <div className="collection-description">
                    <div className="collection-description-text">
                        Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
                    </div>
                    <div className="collection-description-link">All collections in Delhi NCR <i className="fi fi-rr-caret-right absolute-center"></i></div>
                </div>
                <Slider {...settings}> 
                    {diningCollections.map((item)=>{
                        return <DiningOutItem item={item} key={item.id}/>
                    })}
                </Slider>
            </div>

        </div>
      
    </div>
  )
}

export default DiningOutCollections
