'use client'

import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import * as C from './styles'
const items = [
  {
    src: 'https://images3.alphacoders.com/132/1323165.png',
    
    key: 1,
  },
  {
    src: 'https://images8.alphacoders.com/533/533007.png',
  
    key: 2,
  },
  {
    src: 'https://images3.alphacoders.com/132/1322308.jpeg',
    
    key: 3,
  },
];

function CarouselComponent(args:any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex:any) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <C.Container fluid='xl'>

    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <C.Image src={item.src}/>
       
      </CarouselItem>
    )
  })}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
</C.Container>
  );
}

export default CarouselComponent;