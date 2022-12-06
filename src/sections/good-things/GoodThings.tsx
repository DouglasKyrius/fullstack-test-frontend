import Slider from 'react-slick';
import { Image } from '@/components/Image';
import { CardSlide, CardTag, GreenRectangle, Title } from './GoodThings.styles';

const CardComponent = () => (
  <CardSlide className="relative">
    <Image
      src="/slide-1.webp"
      alt="slide-1 image"
      width={360}
      height={200}
      visibleByDefault={false}
    />
    <div className="px-7 pt-6">
      <div className="flex">
        <CardTag>
          <p>function</p>
        </CardTag>
      </div>
      <p className="font-medium mt-4 text-lg text-gray-800">
        Organize your daily job enhance your life performance
      </p>
      <button
        type="button"
        className="absolute bottom-6 font-bold text-green-400 text-left"
      >
        read more
      </button>
    </div>
    <div className="absolute top-44 right-5">
      <Image src="/mark.svg" />
    </div>
  </CardSlide>
);

export const GoodThings = () => {
  const settings = {
    dots: true,
    speed: 500,
    arrows: false,
    slidesPerRow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesPerRow: 1,
        },
      },
    ],
  };

  return (
    <>
      <GreenRectangle />
      <div className="flex flex-col gap-y-10 pt-12 lg:pt-20 lg:pl-20">
        <Title>good things</Title>

        <Slider {...settings} className="">
          {[1, 2, 3, 4, 5, 6].map((el) => (
            <div key={el}>
              <CardComponent />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
