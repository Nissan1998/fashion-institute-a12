import LazyLoad from "react-lazy-load";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import cover from "../assets/images/cover.png";
import cover1 from "../assets/images/summer.png";

const Banner = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      emulateTouch={true}
      infiniteLoop={true}
    >
      <div className="flex">
        <LazyLoad>
          <img src={cover1} />
        </LazyLoad>
      </div>
      <div className="flex">
        <LazyLoad>
          <img src={cover} />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad>
          <img src="https://i.ibb.co/M1PRBq1/Yellow-White-Modern-Special-Discount-Banner.png" />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad>
          <img src="https://i.ibb.co/NW6wD5B/Fashion-Style-Landscape-Banner.png" />
        </LazyLoad>
      </div>

      <div>
        <LazyLoad>
          <img src="https://i.ibb.co/1Xctzjj/Gold-Minimalist-Fashion-Stylist-Service-Medium-Banner.png" />
        </LazyLoad>
      </div>
    </Carousel>
  );
};

export default Banner;
