import { useEffect, useRef, useState } from "react";
import nextIcon from "../../public/assets/img/next.png";
import prevIcon from "../../public/assets/img/previous.png";

type CarouselProps = {
  images: { id: number; url: string; title: string }[];
  imagesPerSlide: number;
};

const Carousel = ({ images, imagesPerSlide }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [imageWidth, setImageWidth] = useState(0);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (images.length > 0) setCurrentSlide(1);
  }, [images]);

  useEffect(() => {
    if (imageRef.current) setImageWidth(imageRef.current?.offsetWidth ?? 0);
  }, []);

  const handleClickPrevious = () => {
    console.log("click");

    setCurrentSlide((prev) => (prev === 1 ? images.length : prev - 1));
  };

  const handleClickNext = () => {
    setCurrentSlide((prev) => (prev === images.length ? 1 : prev + 1));
  };

  return (
    <div className="flex justify-between items-center relative md:max-w-3xl flex-1 md:h-2/3">
      <button
        onClick={handleClickPrevious}
        className="flex justify-center items-center"
      >
        <img src={prevIcon} alt="prev-button" className="w-1/2" />
      </button>
      <div
        className="flex-1 text-center overflow-hidden h-full"
        style={{
          width: imageWidth ? `${imagesPerSlide * imageWidth}px` : "100%",
        }}
      >
        <div
          className="flex w-full h-full transition-transform duration-300"
          style={{
            transform: `translateX(-${(currentSlide - 1) * imageWidth}px)`,
          }}
        >
          {images.map((image) => (
            <img
              onLoad={() => {
                setImageWidth(imageRef.current?.offsetWidth ?? 0);
              }}
              ref={imageRef}
              src={image.url}
              alt={image.title}
              className="w-full h-full object-contain"
            />
          ))}
        </div>
      </div>

      <button
        onClick={handleClickNext}
        className="flex justify-center items-center"
      >
        <img src={nextIcon} alt="next-button" className="w-1/2" />
      </button>
    </div>
  );
};

export default Carousel;
