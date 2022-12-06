import tw from 'twin.macro';

export const HeroTitle = tw.h1`
  text-black
  leading-none
  font-bold
  text-[4rem]
  lg:text-[5rem]
`;

export const SubTitle = tw.h2`
  text-green-500
  text-4xl
  tracking-wide
  font-normal
  lg:text-6xl
`;

export const Paragraph = tw.p`
  font-semibold
  text-2xl
`;

export const MarkBackground = tw.div`
  absolute
  top-0
  right-0 
  -z-40
  lg:w-[32rem]
  xl:w-[40rem]
  h-[46rem]
  [background-image: url('/mark-bg.svg')]
  [background-position: top]
  [background-repeat: no-repeat]
  [background-size: cover]
`;
