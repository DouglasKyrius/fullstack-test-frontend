import tw from 'twin.macro';

export const Title = tw.h1`
  text-black
  leading-tight
  font-bold
  text-5xl
  md:text-[5rem]
`;

export const SubTitle = tw.h2`
  text-green-500
  text-3xl
  tracking-wide
  font-normal
  md:text-5xl
`;

export const FetchError = tw.div`
  absolute
  mt-6
  text-red-500
  bg-red-50
  py-1
  px-3
`;
