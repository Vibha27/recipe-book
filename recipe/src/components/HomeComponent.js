import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { Card, CardImg,CardBody} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';
const items = [
  {
    src: 'images/image-slider1.jpeg',
    altText: "Burger",
    caption: 'Burger'
  },
  {
    src: 'images/image-slider2.png',
    altText: 'Indian Vegies',
    caption: 'Indian Vegies'
  },
  {
    src: 'images/image-slider3.jpeg',
    altText: 'Sandwich',
    caption: 'Sandwich'
  },
  {
    src: 'images/image-slider4.jpeg',
    altText: 'Chicken',
    caption: 'Chicken'
  },
  {
    src: 'images/image-slider5.jpeg',
    altText: 'Noodles',
    caption: 'Noodles'
  }
];

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="mt-5 mb-5">
          <img src={item.src} alt={item.altText} className=".img-fluid rounded mx-auto d-block" style={{ width : "750px", height:"500px"}}/>
        </div>
         
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  function RenderItems({dish}) {
    return (
      <Card >
            <Link to={`/dishes/${dish.id}`}>
                <CardImg width="100%" height="250px" src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>{ dish.name }</CardBody>
            </Link>
      </Card>
    );
  }

// Dishes
const menu = props.dishes.dishes.map((dish)=> {
  return (
      <div key={dish.id} className="col-12 col-md-3 mb-2">
          <RenderItems dish={dish}  />
      </div>
    
  );
})

  return (
    <div style={{ backgroundColor : '#E2D6DB '}}>
      {/* slider */}
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      
    {/* Dishes */}
    <div>
      <div className="container" >
        <div className="row">
            {menu}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;