import tw, { styled } from 'twin.macro';

export const Title = tw.h1`
  font-['Poppins']
  text-white
  text-6xl
  leading-none
  font-semibold
  after:(
    [content: '']
    w-full
    h-1
    bg-green-500
    relative
    block
    top-2.5
  )
`;

export const Paragraph = tw.p`
  text-white
  font-medium
  text-sm
  md:text-base
`;

export const TodoColumnContainer = styled.div(
  ({ columnId }: { columnId: string }) => [
    tw`
      shadow-2xl
      w-[360px]
      px-6
      py-10
      select-none
      lg:(
        inline-grid
        mx-5
      )
      border-t-[1.25rem]
      sm:w-96
    `,
    columnId === 'todo-column'
      ? tw`border-t-orange-500`
      : tw`border-t-green-500`,
  ]
);

export const TodoCardTitle = tw.h1`
  font-['Poppins']
  font-semibold
  text-[2.5rem]
`;

export const TodoCardSubTitle = tw.h2`
  text-2xl
`;

export const TodoTaskCardContainer = styled.div`
  ${tw`
    flex
    items-center
    transition
    hover:shadow
  `}

  :hover {
    button {
      visibility: visible;
    }
  }
`;

export const TodoTaskName = tw.p`
  text-left
  max-w-[15rem]
  break-words
`;

export const TodoDeleteButton = tw.button`
  font-bold
  text-xs
  text-gray-400
  lg:invisible
`;

export const IconUnchecked = tw.div`
  inline-block
  w-6
  h-6
  [background: url('/Ellipse1.svg') no-repeat left center]
`;

export const IconChecked = tw(IconUnchecked)`
  [background: url('/Checked.svg') no-repeat left center]
`;
