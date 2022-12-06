import tw from 'twin.macro';

export const GreenRectangle = tw.div`
  absolute
  -z-50
  bg-green-500
  rounded-xl
  w-[22.5rem]
  h-[32rem]
  lg:(
    w-[67.5rem]
  )
`;

export const Title = tw.h1`
  font-bold
  text-5xl
  text-white
`;

export const CardSlide = tw.div`
  w-[22rem]
  h-[26.875rem]
  bg-white
  rounded-2xl
  shadow-lg
  shadow-blue-600/20
  overflow-hidden
`;

export const CardTag = tw.div`
  border
  rounded-3xl
  text-sm
  border-gray-400
  text-gray-500
  px-2.5
  py-1
`;
