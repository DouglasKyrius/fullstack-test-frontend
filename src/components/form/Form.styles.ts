import { memo } from 'react';
import tw, { styled } from 'twin.macro';

type InputProps = {
  hasError?: boolean;
};

export const AuthWrapper = tw.div`
  [font-family: 'Manrope', sans-serif]
  select-none
  h-full
  bg-white
  backdrop-blur-3xl
  pt-12
  px-10
  md:(
    p-20
    h-auto
    rounded
    w-[36rem]
    bg-white/95
    [filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))]
  )
`;

export const HeaderTitle = tw.p`
  font-extrabold
  text-4xl
`;

export const SubTitle = tw.p`
  text-xl
`;

export const Input = memo(
  styled.input(({ hasError }: InputProps) => [
    tw`
    block
    p-2.5
    w-full
    h-[54px]
    bg-transparent
    border
    border-gray-400
    rounded-xl
    tracking-wide
    focus:(
      outline-none
      ring-0
      border-zinc-600
    )
  `,
    hasError && tw`border-red-600`,
  ])
);

export const Label = memo(tw.label`
  font-semibold
  text-2xl
`);

export const ForgotPassword = memo(tw.p`
  underline
  text-sm
  text-right
  mb-6
`);

export const Divider = styled.div`
  ::before,
  ::after {
    ${tw`
      relative
      w-full
      border-t
      border-t-zinc-500
      mx-2
      [content: '']
      [transform: translateY(50%)]
    `}
  }
  ${tw`
    text-sm
    my-6
    flex
    shrink-0
    whitespace-nowrap
    text-center
    border-0
    font-medium
    text-zinc-700
  `}
`;

export const SocialWrapper = tw.div`
  flex
  items-center
  justify-center
`;

export const SocialLogin = tw.button`
  flex
  items-center
  justify-center
  w-full
  py-2
  px-4
  gap-x-2
  border
  border-zinc-400
  rounded-lg
  focus:(
    ring-2
    outline-none
    ring-red-300
  )
`;

export const BottomText = styled.p`
  ${tw`
    text-center
    text-sm
    my-6
    text-zinc-700
  `};
  a {
    ${tw`
      underline
      font-medium
      text-zinc-800
    `};
  }
`;
