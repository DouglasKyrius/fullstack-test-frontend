import { Button } from '@/components/button';
import { Image } from '@/components/Image';
import { HeroTitle, MarkBackground, Paragraph, SubTitle } from './Hero.styles';

export const Hero = () => (
  <div className="mb-7 text-center lg:text-left">
    <div className="flex justify-between">
      <div className="mt-12 w-full">
        <HeroTitle>Organize</HeroTitle>
        <SubTitle>your daily jobs</SubTitle>
        <div className="mt-14" />
        <Paragraph>The only way to get things done</Paragraph>
        <div className="mt-11" />
        <div className="w-[18.75rem] h-16 m-auto lg:m-0">
          <a href="#todo-section">
            <Button>
              <span className="text-2xl">Go to To-do list</span>
            </Button>
          </a>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/hero-room.webp"
          alt="hero room"
          width={443}
          height={482}
          effect="opacity"
          visibleByDefault={false}
        />
      </div>
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
    <MarkBackground />
  </div>
);
