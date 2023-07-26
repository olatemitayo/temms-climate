import React, { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselWithAutoplay() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      className="h-[100vh] w-full"
      slideSize="100%"
      withControls={false}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide className="h-[100vh] ">
        <img src="/snoww.png" className="h-[100vh] w-full" />
      </Carousel.Slide>
      <Carousel.Slide>
        {" "}
        <img src="/sky.png" className="h-[100vh] w-full" />
      </Carousel.Slide>
      <Carousel.Slide>
        {" "}
        <img src="/rain.png" className="h-[100vh] w-full" />
      </Carousel.Slide>
      <Carousel.Slide>
        {" "}
        <img src="/storm.png" className="h-[100vh] w-full" />
      </Carousel.Slide>
    </Carousel>
  );
}
