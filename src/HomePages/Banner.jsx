import LazyLoad from "react-lazy-load";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
          <img src="https://i.ibb.co/xJb354J/Blue-Pink-Modern-Special-Offer-Sale-Banner.png" />
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
