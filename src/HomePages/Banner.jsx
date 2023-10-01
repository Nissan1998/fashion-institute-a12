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
        <img src={cover1} />
      </div>
      <div className="flex">
        <img src={cover} />
      </div>
      <div>
        <img
          className="object-cover"
          src="https://i.ibb.co/M1PRBq1/Yellow-White-Modern-Special-Discount-Banner.png"
        />
      </div>
      <div>
        <img
          className="object-cover"
          src="https://i.ibb.co/NW6wD5B/Fashion-Style-Landscape-Banner.png"
        />
      </div>

      <div>
        <img
          className="object-cover"
          src="https://i.ibb.co/1Xctzjj/Gold-Minimalist-Fashion-Stylist-Service-Medium-Banner.png"
        />
      </div>
    </Carousel>
  );
};

export default Banner;
