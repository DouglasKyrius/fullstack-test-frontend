import tw, { styled } from 'twin.macro';

type DefaultButtonProps = {
  isBlack?: boolean;
  borderless?: boolean;
};

export const DefaultButton = styled.button(
  ({ isBlack, borderless }: DefaultButtonProps) => [
    tw`
      flex
      items-center
      justify-center
      text-white
      transition
      font-medium
      text-sm
      w-full
      h-full
      cursor-pointer
      disabled:(
        text-gray-100
        cursor-not-allowed
      )
    `,
    isBlack
      ? tw`bg-black hover:bg-zinc-900 disabled:(bg-zinc-600 hover:bg-zinc-600)`
      : tw`bg-green-500 hover:bg-green-600 disabled:(bg-green-800 hover:bg-green-800)`,
    borderless ? null : tw`rounded-lg`,
  ]
);

export const ButtonText = tw.span`
  text-center
  font-semibold
`;
