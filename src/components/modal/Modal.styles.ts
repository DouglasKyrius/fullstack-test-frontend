import tw from 'twin.macro';

export const ModalOverlay = tw.div`
  fixed
  top-0
  left-0
  w-screen
  h-screen
  bg-black/[.6]
  [z-index: 1000]
`;

export const ModalWrapper = tw.div`
  fixed
  top-0
  left-0
  w-full
  h-full
  flex
  items-center
  justify-center
  overflow-x-hidden
  overflow-y-auto
  outline-none
  [z-index: 1050]
`;

export const ModalContainer = tw.div`
  relative
  bg-white
  mx-4
  p-8
  [z-index: 100]
  md:(
    pt-16
    pl-12
    pr-40
    pb-12
  )
`;

export const ModalHeader = tw.div`
  flex
  justify-end
`;

export const ModalCloseButton = tw.button`
  absolute
  top-2
  right-8 
  text-3xl
  font-semibold
  font-sans
  text-black
  opacity-30
  cursor-pointer
  border-none
`;

export const ModalOptionsTitle = tw.h1`
  text-4xl
  font-bold
  tracking-tight
  max-w-md
  text-center
  pb-2
  lg:pb-4
`;

export const ModalOptionsMessage = tw.p`
  max-w-xs
  text-gray-500
  text-center
`;

export const ModalOptionsButtonGroup = tw.div`
  flex
  flex-col
  w-full
  items-center
  mt-6
  gap-y-4
  lg:mt-8
`;
