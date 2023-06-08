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
      <div>
        <img src="https://i.ibb.co/xJb354J/Blue-Pink-Modern-Special-Offer-Sale-Banner.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/M1PRBq1/Yellow-White-Modern-Special-Discount-Banner.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/NW6wD5B/Fashion-Style-Landscape-Banner.png" />
      </div>

      <div>
        <img src="https://i.ibb.co/1Xctzjj/Gold-Minimalist-Fashion-Stylist-Service-Medium-Banner.png" />
      </div>
    </Carousel>
  );
};

export default Banner;
