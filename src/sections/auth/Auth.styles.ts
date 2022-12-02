import tw from 'twin.macro';

export const Title = tw.h1`
  text-black
  text-[5rem]
  leading-tight
  font-bold
`;

export const SubTitle = tw.h2`
  text-green-500
  text-5xl
  tracking-wide
  font-normal
`;

export const FetchError = tw.div`
  absolute
  mt-6
  text-red-500
  bg-red-50
  py-1
  px-3
`;
