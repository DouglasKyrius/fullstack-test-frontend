import { memo } from 'react';
import tw, { styled } from 'twin.macro';

type InputProps = {
  hasError?: boolean;
};

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
