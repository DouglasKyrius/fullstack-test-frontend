import tw from 'twin.macro';

export const ContactContainer = tw.div`
  rounded
  shadow-xl
  p-8
  w-[22.5rem]
  sm:w-[32rem]
  md:w-[43rem]
  lg:p-16
`;

export const ContactInput = tw.input`
  block
  mt-2
  p-2.5
  w-full
  h-12
  border
  border-zinc-900
  rounded
  tracking-wide
  focus:(
    outline-none
    ring-0
    border-zinc-500
  )
`;

export const ContactTextarea = tw.textarea`
  block
  mt-2
  p-2.5
  w-full
  border
  border-zinc-900
  rounded
  tracking-wide
  focus:(
    outline-none
    ring-0
    border-zinc-500
  )`;

export const EllipseImage = tw.div`
  w-48
  h-48
  rounded-full
  m-auto
  [background-image: url('/tatiana.webp')]
  [background-position: top]
  [background-repeat: no-repeat]
  [background-size: cover]
`;
