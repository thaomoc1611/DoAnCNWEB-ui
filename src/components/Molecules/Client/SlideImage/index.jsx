import SimpleImageSlider from "react-simple-image-slider";
import { imagesSlide } from "../../../../assets/images";

const SlideImage = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1930}
        height={538}
        images={imagesSlide}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};
export default SlideImage;
