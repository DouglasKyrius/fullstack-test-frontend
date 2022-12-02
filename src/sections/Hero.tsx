import tw from 'twin.macro';
import { Button } from '@/components/button';
import { Image } from '@/components/Image';
import { MarkBG } from '@/components/background-svg';

export const HeroTitle = tw.h1`
  text-black
  text-[5rem]
  leading-none
  font-bold
`;

export const SubTitle = tw.h2`
  text-green-500
  text-6xl
  tracking-wide
  font-normal
`;

export const Paragraph = tw.p`
  font-semibold
  text-2xl
`;

export const Hero = () => (
  <div className="mb-7">
    <div className="flex justify-between">
      <div className="mt-12">
        <HeroTitle>Organize</HeroTitle>
        <SubTitle>your daily jobs</SubTitle>
        <div className="mt-14" />
        <Paragraph>The only way to get things done</Paragraph>
        <div className="mt-11" />
        <div className="w-[18.75rem] h-16">
          <Button>
            <span className="text-2xl">Go to To-do list</span>
          </Button>
        </div>
      </div>
      <Image
        src="/hero-room.webp"
        alt="hero room"
        width={443}
        height={482}
        effect="opacity"
        visibleByDefault={false}
      />
    </div>
    <div className="flex place-content-center mt-12 animate-bounce">
      <Image
        src="/icon-scroll.svg"
        alt="icon scroll"
        width={25}
        height={42}
        effect="opacity"
        visibleByDefault={false}
      />
    </div>
    <div className="absolute top-0 right-0 -z-40">
      <MarkBG />
    </div>
  </div>
);
